import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer">
        {children}
    </a>
);

ExternalLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default ExternalLink;
