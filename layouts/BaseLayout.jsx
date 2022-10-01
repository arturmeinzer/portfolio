import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Hero from "../components/shared/Hero";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

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
    },
});

const BaseLayout = ({ children, isHome }) => (
    <ThemeProvider theme={theme}>
        <Box sx={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
            <NavBar />
            { isHome && <Hero /> }
            <Container sx={{ margin: "50px 0", flexGrow: 4 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    </ThemeProvider>
);

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
    isHome: PropTypes.bool,
};

BaseLayout.defaultProps = {
    isHome: false,
};

export default BaseLayout;
