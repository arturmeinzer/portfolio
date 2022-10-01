import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { GiHamburgerMenu } from "react-icons/gi";
import AppLink from "./AppLink";
import withApollo from "../../hoc/withApollo";
import { useLazyGetUser } from "../../apollo/actions";
import ManagerDropDown from "./ManagerDropDown";

const pages = [
    {
        url: "/projects",
        title: "Projects",
    },
    {
        url: "/forum/categories",
        title: "Categories",
    },
    {
        url: "/cv",
        title: "CV",
    },
    {
        url: "/ask-me",
        title: "Ask me",
    },
];

const MuiNavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [user, setUser] = useState(null);
    const [hasResponse, setHasResponse] = useState(false);
    const [getUser, { data, error }] = useLazyGetUser();

    useEffect(() => {
        getUser();
    }, [getUser]);

    if (data) {
        if (data.user && !user) setUser(data.user);
        if (!data.user && user) setUser(null);
        if (!hasResponse) setHasResponse(true);
    }

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    const brand = (
        <AppLink href="/">
            <Box sx={{ fontSize: "25px" }}>Artur Meinzer</Box>
        </AppLink>
    );

    return (
        <AppBar position="static" sx={{ background: "#141618" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: { xs: "flex", md: "none" },
                    }}
                    >
                        { brand }
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <ManagerDropDown />
                            <IconButton
                                sx={{ border: "1px solid #aaa", borderRadius: "5px", color: "#aaa" }}
                                onClick={handleOpenNavMenu}
                            >
                                <GiHamburgerMenu />
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                keepMounted
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <AppLink href={page.url}>{page.title}</AppLink>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent: "space-between", display: { xs: "none", md: "flex" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            { brand }
                            {pages.map((page) => (
                                <AppLink
                                    key={page.url}
                                    href={page.url}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page.title}
                                </AppLink>
                            ))}
                        </Box>
                        { hasResponse && (
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                            }}
                            >
                                { user && (
                                    <>
                                        <span>{`Welcome ${user.username}`}</span>
                                        <ManagerDropDown />
                                        <AppLink href="/logout">
                                            <Button variant="contained" color="error">
                                                Logout
                                            </Button>
                                        </AppLink>
                                    </>
                                )}
                                { (error || !user) && (
                                    <>
                                        <AppLink href="/register">
                                            Register
                                        </AppLink>
                                        <AppLink href="/login">
                                            <Button variant="contained" color="success">
                                                Login
                                            </Button>
                                        </AppLink>
                                    </>
                                )}
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default withApollo(MuiNavBar);
