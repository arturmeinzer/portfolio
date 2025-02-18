import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const initialState = {
    show: false,
    message: "",
    severity: "success",
    callback: null,
};

export default (WrappedComponent) => (props) => {
    const [snackBar, setSnackBar] = useState(initialState);

    const notify = (message, callback = null, severity = "success") => {
        setSnackBar({
            show: true,
            message,
            severity,
            callback,
        });
    };

    const handleClose = () => {
        const { callback } = snackBar;
        setSnackBar({
            ...snackBar,
            show: false,
            callback: null,
        });
        if (typeof callback === "function") {
            callback();
        }
    };

    return (
        <>
            <WrappedComponent
                {...props}
                notify={notify}
            />
            <Snackbar
                open={snackBar.show}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={4000}
                onClose={handleClose}
                sx={{ marginTop: "50px" }}
            >
                <Alert severity={snackBar.severity} variant="filled">{snackBar.message}</Alert>
            </Snackbar>
        </>
    );
};
