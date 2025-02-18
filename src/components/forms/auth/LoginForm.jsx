import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Form from "../../shared/Form.jsx";

const LoginForm = ({ onSubmit, children }) => {
    const { register, handleSubmit } = useForm();

    return (
        <Form>
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
                    autoComplete="current-password"
                    {...register("password")}
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

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node,
};

LoginForm.defaultProps = {
    children: null,
};

export default LoginForm;
