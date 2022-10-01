import React, { useEffect, useState } from "react";
import { useLazyGetUser } from "../apollo/actions";

export default (WrappedComponent) => (props) => {
    const [user, setUser] = useState(null);
    const [getUser, { data, error }] = useLazyGetUser();

    useEffect(() => {
        getUser();
    }, [getUser]);

    if (data) {
        if (data.user && !user) setUser(data.user);
        if (!data.user && user) setUser(null);
    }

    return (
        <WrappedComponent
            {...props}
            userError={error}
            user={user}
        />
    );
};
