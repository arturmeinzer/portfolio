import "devicon/devicon.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/index.css";

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
