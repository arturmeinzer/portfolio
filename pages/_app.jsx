import "devicon/devicon.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../src/styles/index.css";

import React from "react";
import PropTypes from "prop-types";
import { initializeApp } from "firebase/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { UserContextProvider } from "../src/context/UserContext";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    background: "#fff",
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
            },
        },
        MuiAlert: {
            defaultProps: {
                variant: "outlined",
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0 1px 4px 0 rgb(0 0 0 / 20%)",
                    border: "0",
                    "&:hover": {
                        boxShadow: "0px 4px 8px 0 rgb(0 0 0 / 20%)",
                    },
                },
            },
        },
    },
});

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <UserContextProvider>
            <CssBaseline />
            <Component {...pageProps} />
        </UserContextProvider>
    </ThemeProvider>
);

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
