import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Hero from "../components/shared/Hero";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

const BaseLayout = ({ children, isHome }) => (
    <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{ minHeight: "100%" }}
    >
        <NavBar />
        { isHome && <Hero /> }
        <Container sx={{ margin: "50px 0", flexGrow: 4 }}>
            {children}
        </Container>
        <Footer />
    </Stack>
);

BaseLayout.propTypes = {
    children: PropTypes.node,
    isHome: PropTypes.bool,
};

BaseLayout.defaultProps = {
    children: null,
    isHome: false,
};

export default BaseLayout;
