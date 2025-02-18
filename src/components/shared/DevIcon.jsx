import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

const DevIcon = ({ children }) => {
    const className = `devicon-${children}-plain`;

    return (
        <Tooltip title={children} arrow>
            <i className={className} />
        </Tooltip>
    );
};

DevIcon.propTypes = {
    children: PropTypes.string.isRequired,
};

export default DevIcon;
