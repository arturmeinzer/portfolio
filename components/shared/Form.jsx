import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";

const Form = ({ children }) => (
    <form>
        <Stack
            spacing={2}
            sx={{ mb: 3, px: 1 }}
        >
            {children}
        </Stack>
    </form>
);

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

export default Form;
