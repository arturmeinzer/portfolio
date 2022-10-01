import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import DevIcon from "./DevIcon";

const DevIconBar = ({ iconsArray }) => (
    <Box sx={{ display: "flex", fontSize: "25px", gap: "10px" }}>
        { iconsArray.map((item) => <DevIcon key={item}>{item}</DevIcon>) }
    </Box>
);

DevIconBar.propTypes = {
    iconsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DevIconBar;
