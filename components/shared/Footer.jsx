import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaXing,
} from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/artur.himself/",
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/artur-meinzer-423609128/",
    },
    {
        icon: <FaXing />,
        url: "https://www.xing.com/profile/Artur_Meinzer/cv",
    },
    {
        icon: <FaGithub />,
        url: "https://github.com/arturmeinzer",
    },
];

const Footer = () => (
    <Container
        sx={{
            display: "block",
            textAlign: "center",
            color: "white",
            padding: "30px",
            background: "#141618",
            maxWidth: "100% !important",
        }}
    >
        <Box>
            Copyright &copy; Artur Meinzer
        </Box>
        <Box sx={{
            display: "flex",
            marginTop: "20px",
            gap: "10px",
            justifyContent: "center",
        }}
        >
            {socialLinks.map((item) => (
                <IconButton
                    key={item.url}
                    onClick={() => window.open(item.url)}
                    sx={{ color: "inherit" }}
                >
                    {item.icon}
                </IconButton>
            ))}
        </Box>
    </Container>
);

export default Footer;
