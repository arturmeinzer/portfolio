import React, { useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import withApollo from "../src/hoc/withApollo";
import RegisterForm from "../src/components/forms/auth/RegisterForm";
import Redirect from "../src/components/shared/Redirect";
import BaseLayout from "../src/layouts/BaseLayout";
import PageHeader from "../src/components/shared/PageHeader";
import { REGISTERED } from "../src/constants/messages";
import useCreateUser from "../src/hooks/useCreateUser.js";

const Register = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const createUser = useCreateUser();

    const handleSubmit = async (registerData) => {
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

        try {
            await createUser(email, password, username, (createdUser) => {
                setUser(createdUser);
            });
        } catch (e) {
            setError(e.message);
        }
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
