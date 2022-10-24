import React, { useContext } from "react";
import Redirect from "../components/shared/Redirect";
import { NOT_AUTHENTICATED, NOT_AUTHORIZED } from "../constants/messages";
import UserContext from "../context/UserContext.jsx";

const withAuth = (WrappedComponent) => (props, validRoles = []) => {
    const user = useContext(UserContext);

    if (user === false
        && typeof window !== "undefined"
    ) {
        return <Redirect to="/login" message={NOT_AUTHENTICATED} />;
    }

    if (user) {
        if (validRoles.length > 0 && validRoles.includes(user.role)) {
            return <Redirect to="/login" message={NOT_AUTHORIZED} />;
        }
        return <WrappedComponent {...props} />;
    }

    return <p>Loading...</p>;
};

export default withAuth;
