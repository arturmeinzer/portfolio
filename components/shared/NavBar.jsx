import React, { useState } from "react";
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
import Stack from "@mui/material/Stack";
import AppLink from "./AppLink";
import withApollo from "../../hoc/withApollo";
import ManagerDropDown from "./ManagerDropDown";
import Brand from "./Brand";
import withUser from "../../hoc/withUser";
import { PROP_USER } from "../../constants/props";

const pages = [
    {
        url: "/projects",
        title: "Projects",
    },
    {
        url: "/cv",
        title: "CV",
    },
];

const NavBar = ({ user }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

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
                        <Brand />
                        <Stack flexDirection="row" gap="10px">
                            { user && <ManagerDropDown /> }
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
                        </Stack>
                    </Box>

                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: "space-between",
                        display: { xs: "none", md: "flex" },
                    }}
                    >
                        <Stack flexDirection="row" alignItems="center" gap="40px">
                            <Brand />
                            { pages.map((page) => (
                                <AppLink
                                    key={page.url}
                                    href={page.url}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page.title}
                                </AppLink>
                            ))}
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" gap="20px">
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
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

NavBar.propTypes = {
    user: PROP_USER,
};

NavBar.defaultProps = {
    user: null,
};

export default withApollo(withUser(NavBar));
