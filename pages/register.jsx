import React from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import withApollo from "../hoc/withApollo";
import RegisterForm from "../components/forms/auth/RegisterForm";
import Redirect from "../components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";
import { useRegister } from "../apollo/actions";
import PageHeader from "../components/shared/PageHeader";

const Register = () => {
    const [registerUser, { data, error }] = useRegister();

    const errorMessage = (err) => err.message;

    return (
        <BaseLayout>
            <Container sx={{ width: "500px" }}>
                <PageHeader>Register</PageHeader>
                <RegisterForm onSubmit={(registerData) => {
                    registerUser({ variables: registerData }).catch(() => {});
                }}
                />
                { data && data.register && <Redirect to="/login" /> }
                { error && <Alert severity="error">{errorMessage(error)}</Alert>}
            </Container>
        </BaseLayout>
    );
};

export default withApollo(Register);
