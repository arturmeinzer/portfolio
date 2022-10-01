import React from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import LoginForm from "../components/forms/auth/LoginForm";
import withApollo from "../hoc/withApollo";
import { useLogin } from "../apollo/actions";
import Redirect from "../components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";

const Login = () => {
    const [login, { data, error }] = useLogin();

    const errorMessage = (err) => err.message;

    return (
        <BaseLayout>
            <Container sx={{ width: "500px" }}>
                <div>
                    <h1>Login</h1>
                </div>
                <LoginForm onSubmit={(loginData) => {
                    login({ variables: loginData }).catch(() => {});
                }}
                />
                { data && data.login && <Redirect to="/" />}
                { error && <Alert severity="error">{errorMessage(error)}</Alert> }
            </Container>
        </BaseLayout>
    );
};

export default withApollo(Login);
