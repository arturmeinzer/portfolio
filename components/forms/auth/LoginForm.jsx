import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const LoginForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
        <>
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

            <Button
                type="button"
                variant="contained"
                size="large"
                onClick={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
        </>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
