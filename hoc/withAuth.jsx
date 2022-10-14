import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Redirect from "../components/shared/Redirect";
import { NOT_AUTHENTICATED } from "../constants/messages";

export default (WrappedComponent) => (props) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
            setUser(authUser);
        } else {
            setUser(null);
        }
        setLoading(false);
    }, (err) => {
        setError(err);
        setLoading(false);
    });

    if (
        !loading
        && (!user || error)
        && typeof window !== "undefined"
    ) {
        return <Redirect to="/login" message={NOT_AUTHENTICATED} />;
    }

    if (user) {
        return <WrappedComponent {...props} />;
    }

    return <p>Loading...</p>;
};
