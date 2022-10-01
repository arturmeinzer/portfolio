import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const AppLink = ({ children, href, as }) => (
    <Link href={href} as={as} passHref>
        <a href="/replace">
            {children}
        </a>
    </Link>
);

AppLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    as: PropTypes.string,
};

AppLink.defaultProps = {
    as: null,
};

export default AppLink;
