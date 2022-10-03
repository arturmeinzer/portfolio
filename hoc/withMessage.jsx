import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

const initialState = {
    show: false,
    message: "",
    severity: "success",
};

export default (WrappedComponent) => (props) => {
    const [snackBar, setSnackBar] = useState(initialState);
    const notify = (message, severity = "success") => {
        setSnackBar({
            show: true,
            message,
            severity,
        });
    };

    const handleClose = () => {
        setSnackBar({
            ...snackBar,
            show: initialState.show,
        });
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
