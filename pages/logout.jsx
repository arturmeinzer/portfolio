import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import withApollo from "../hoc/withApollo";
import { useLogout } from "../apollo/actions";
import BaseLayout from "../layouts/BaseLayout";

const Logout = ({ apollo }) => {
    const [logout] = useLogout();
    const router = useRouter();

    useEffect(() => {
        logout().then(() => {
            apollo.resetStore().then(() => {
                router.push("/login");
            });
        });
    }, [logout, apollo, router]);

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
