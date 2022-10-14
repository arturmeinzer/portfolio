import React, { useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import withApollo from "../hoc/withApollo";
import RegisterForm from "../components/forms/auth/RegisterForm";
import Redirect from "../components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";
import PageHeader from "../components/shared/PageHeader";
import { REGISTERED } from "../constants/messages";

const Register = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const handleSubmit = (registerData) => {
        const {
            email,
            password,
            passwordConfirmation,
            username,
        } = registerData;
        if (password !== passwordConfirmation) {
            setError("Passwords don't match!");
            return;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user, {
                    displayName: username,
                }).then(() => {
                    setUser(userCredential.user);
                }).catch((err) => {
                    setError(err.message);
                });
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <BaseLayout>
            <Container sx={{ width: "500px" }}>
                <PageHeader>Register</PageHeader>
                <RegisterForm onSubmit={(registerData) => handleSubmit(registerData)}>
                    { error && <Alert severity="error">{error}</Alert>}
                </RegisterForm>
                { user && <Redirect to="/login" message={REGISTERED} /> }
            </Container>
        </BaseLayout>
    );
};

export default withApollo(Register);
