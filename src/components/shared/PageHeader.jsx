import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const PageHeader = ({ children }) => (
    <Box sx={{ px: 1 }}>
        <h1>{children}</h1>
    </Box>
);

PageHeader.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PageHeader;
