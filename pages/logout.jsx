import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import withApollo from "../src/hoc/withApollo";
import BaseLayout from "../src/layouts/BaseLayout";

const Logout = ({ apollo }) => {
    const router = useRouter();

    useEffect(() => {
        let subscribed = true;

        const auth = getAuth();
        signOut(auth).then(() => {
            apollo.resetStore().then(() => {
                if (subscribed) {
                    router.push("/login");
                }
            });
        });

        return () => {
            subscribed = false;
        };
    }, [apollo, router]);

    return (
        <BaseLayout>
            <Container sx={{ width: "500px" }}>
                <div>
                    <h1>Logout</h1>
                    <p>Signing out...</p>
                </div>
            </Container>
        </BaseLayout>
    );
};

Logout.propTypes = {
    apollo: PropTypes.shape({ resetStore: PropTypes.func }).isRequired,
};

export default withApollo(Logout);
