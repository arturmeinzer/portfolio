import "devicon/devicon.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/index.css";

import React from "react";
import PropTypes from "prop-types";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const MyApp = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
