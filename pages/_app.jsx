import "devicon/devicon.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/index.scss";

import React from "react";
import PropTypes from "prop-types";

const MyApp = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
