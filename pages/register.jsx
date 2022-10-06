import React from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import withApollo from "../hoc/withApollo";
import RegisterForm from "../components/forms/auth/RegisterForm";
import Redirect from "../components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";
import { useRegister } from "../apollo/actions";
import PageHeader from "../components/shared/PageHeader";
import { REGISTERED } from "../constants/messages";

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
                >
                    { error && <Alert severity="error">{errorMessage(error)}</Alert>}
                </RegisterForm>
                { data && data.register && <Redirect to="/login" message={REGISTERED} /> }
            </Container>
        </BaseLayout>
    );
};

export default withApollo(Register);
