import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Form from "../../shared/Form";

const RegisterForm = ({ onSubmit, children }) => {
    const { register, handleSubmit } = useForm();

    return (
        <Form>
            <FormControl fullWidth>
                <InputLabel>Username</InputLabel>
                <OutlinedInput
                    label="Username"
                    autoComplete="username"
                    {...register("username")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                    label="Email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    {...register("password")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Password Confirmation</InputLabel>
                <OutlinedInput
                    label="Password Confirmation"
                    type="password"
                    autoComplete="new-password"
                    {...register("passwordConfirmation")}
                />
            </FormControl>

            <Button
                type="button"
                size="large"
                onClick={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
            {children}
        </Form>
    );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node,
};

RegisterForm.defaultProps = {
    children: null,
};

export default RegisterForm;
