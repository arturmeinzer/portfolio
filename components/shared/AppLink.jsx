import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const AppLink = ({ children, className, href }) => {
    const completeClasses = "nav-link mr-3 " + className;

    return (
        <Link href={href}>
            <a className={completeClasses}>{children}</a>
        </Link>
    );
}

AppLink.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
};

AppLink.defaultProps = {
    className: "",
};

export default AppLink;
