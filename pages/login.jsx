import React, { useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import LoginForm from "../components/forms/auth/LoginForm";
import withApollo from "../hoc/withApollo";
import { useLogin } from "../apollo/actions";
import Redirect from "../components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";
import PageHeader from "../components/shared/PageHeader";
import { MESSAGES } from "../constants/messages";

const Login = () => {
    const [login, { data, error }] = useLogin();
    const router = useRouter();
    const { message } = router.query;

    const disposeMessage = useCallback(() => {
        router.replace("/login", "/login", { shallow: true });
    }, [router]);

    useEffect(() => {
        if (!message) {
            return () => {};
        }

        const timeout = setTimeout(() => {
            disposeMessage();
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [message, disposeMessage]);

    const errorMessage = (err) => err.message;

    return (
        <BaseLayout>
            <Container sx={{ width: "500px" }}>
                <PageHeader>Login</PageHeader>
                <LoginForm onSubmit={(loginData) => {
                    login({ variables: loginData }).catch(() => {});
                }}
                >
                    { error && <Alert severity="error">{errorMessage(error)}</Alert> }
                    { message && (
                        <Alert
                            severity={MESSAGES[message].severity}
                        >
                            {MESSAGES[message].value}
                        </Alert>
                    )}
                </LoginForm>
                { data && data.login && <Redirect to="/" />}
            </Container>
        </BaseLayout>
    );
};

export default withApollo(Login);
