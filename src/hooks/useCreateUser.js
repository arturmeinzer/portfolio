import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    signOut,
} from "firebase/auth";
import {
    getDatabase,
    ref,
    set,
} from "firebase/database";
import { ROLE_GUEST } from "../constants/roles.js";

const translateError = (error) => {
    switch (error.code) {
        case "auth/invalid-email":
            return "Please provide a valid Email Address!";
        default:
            console.table(error);
            return error.message;
    }
};

const useCreateUser = () => {
    const writeUserData = async (user) => {
        console.log(user);
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        await set(userRef, {
            username: user.displayName,
            email: user.email,
            role: ROLE_GUEST,
        });
    };

    return async (email, password, username, callback) => {
        try {
            // Create user
            const auth = getAuth();
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            // Update profile
            await updateProfile(user, {
                displayName: username,
            });

            // Write user with role to db
            await writeUserData(user);

            // Automatic log in, so we log out again
            await signOut(auth);

            // Callback with user
            callback(user);
        } catch (e) {
            throw new Error(translateError(e));
        }
    };
};

export default useCreateUser;
