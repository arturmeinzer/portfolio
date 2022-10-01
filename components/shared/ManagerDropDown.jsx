import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { MdManageAccounts } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppLink from "./AppLink";

const ManagerDropDown = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <>
            <IconButton
                sx={{ border: "1px solid #aaa", borderRadius: "5px", color: "#aaa" }}
                onClick={handleOpenUserMenu}
            >
                <MdManageAccounts />
            </IconButton>
            <Menu
                anchorEl={anchorElUser}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <AppLink href="/projects/new">Create Project</AppLink>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <AppLink href="/jobs/new">Create Job</AppLink>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <AppLink href="/jobs">Jobs</AppLink>
                </MenuItem>
            </Menu>
        </>
    );
};

export default ManagerDropDown;
