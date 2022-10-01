import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Form from "../../shared/Form";

const RegisterForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
        <Form>
            <FormControl fullWidth>
                <InputLabel>Username</InputLabel>
                <OutlinedInput
                    label="Username"
                    name="username"
                    {...register("username")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                    label="Email"
                    name="email"
                    type="email"
                    {...register("email")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                    label="Password"
                    name="password"
                    type="password"
                    {...register("password")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Password Confirmation</InputLabel>
                <OutlinedInput
                    label="Password Confirmation"
                    name="passwordConfirmation"
                    type="password"
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
        </Form>
    );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
