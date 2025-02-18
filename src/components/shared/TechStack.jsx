import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import DevIcon from "./DevIcon.jsx";

const TechStack = ({ iconsArray }) => (
    <Box sx={{
        display: "flex",
        fontSize: "23px",
        gap: "10px",
    }}
    >
        {iconsArray.map(
            (item) => <DevIcon key={item}>{item}</DevIcon>,
        )}
    </Box>
);

TechStack.propTypes = {
    iconsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechStack;
