import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import profilePic from "../../public/profile_small.jpg";
import AppLink from "./AppLink";

const Hero = () => (
    <Box sx={{
        background: "linear-gradient(170deg, #212A39 0%, #181E28 100%)",
        width: "100%",
        boxShadow: "0 4px 10px 0 rgb(0 0 0 / 50%)",
    }}
    >
        <Container
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "80px 40px",
                minHeight: "40vh",
                color: "#fff",
            }}
            disableGutters
        >
            <Box>
                <Typography variant="h3" component="h1">
                    Hey I&apos;m Artur.
                    <br />
                    Experienced Full Stack Developer
                </Typography>
                <Box sx={{ marginTop: "50px" }}>
                    <AppLink href="/projects">
                        <Button size="large">See my work</Button>
                    </AppLink>
                </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                    width="350"
                    height="350"
                    alt="Profile picture"
                    src={profilePic}
                    style={{
                        borderRadius: "50%",
                    }}
                />
            </Box>
        </Container>
    </Box>
);

export default Hero;
