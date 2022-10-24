import React, {
    createContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    child,
    get,
    getDatabase,
    ref,
} from "firebase/database";
import PropTypes from "prop-types";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
    const shouldCheck = useRef(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!shouldCheck.current) {
            return;
        }

        shouldCheck.current = false;
        const auth = getAuth();
        onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                // load role
                const dbRef = ref(getDatabase());
                const snapshot = await get(child(dbRef, `users/${authUser.uid}`));
                const { role } = snapshot.val();

                setUser({
                    ...authUser,
                    role,
                });
            } else {
                setUser(false);
            }
        }, (err) => {
            // eslint-disable-next-line no-console
            console.error(err);
            setUser(false);
        });
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { UserContextProvider };
export default UserContext;
