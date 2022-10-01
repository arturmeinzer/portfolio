import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Hero = () => (
    <Box sx={{
        background: "linear-gradient(170deg, #212A39 0%, #181E28 100%)",
        width: "100%",
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
                <h1>
                    Hey I&apos;m Artur.
                    <br />
                    Experienced full stack developer
                </h1>
                <h5>Check my portfolio and video tutorials</h5>
                <Box sx={{ marginTop: "50px" }}>
                    <Button size="large">See my work</Button>
                </Box>
            </Box>
            <Box sx={{
                display: { xs: "none", md: "block" },
                width: "350px",
                height: "350px",
            }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                    alt=""
                    src="https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg"
                />
            </Box>
        </Container>
    </Box>
);

export default Hero;
