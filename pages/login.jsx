import React, { useCallback, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import LoginForm from "../components/forms/auth/LoginForm";
import withApollo from "../hoc/withApollo";
import Redirect from "../components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";
import PageHeader from "../components/shared/PageHeader";
import { MESSAGES } from "../constants/messages";

const Login = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const router = useRouter();
    const { message } = router.query;

    const showAlert = useCallback(() => {
        if (error) {
            return <Alert severity="error">{error}</Alert>;
        }

        if (message) {
            return <Alert severity={MESSAGES[message].severity}>{MESSAGES[message].value}</Alert>;
        }

        return null;
    }, [error, message]);

    const handleSubmit = (loginData) => {
        const { email, password } = loginData;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((err) => {
                setError(err);
            });
    };

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

    return (
        <BaseLayout>
            <Container sx={{ width: "500px" }}>
                <PageHeader>Login</PageHeader>
                <LoginForm onSubmit={(loginData) => handleSubmit(loginData)}>
                    {showAlert()}
                </LoginForm>
                { user && <Redirect to="/" />}
            </Container>
        </BaseLayout>
    );
};

export default withApollo(Login);
