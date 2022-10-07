import React from "react";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseLayout from "../layouts/BaseLayout";
import DevIcon from "../components/shared/DevIcon";
import ExternalLink from "../components/shared/ExternalLink";

const techStack = [
    {
        icon: "php",
        text: "PHP",
    },
    {
        icon: "symfony",
        text: "Symfony",
    },
    {
        icon: "react",
        text: "React.js",
    },
    {
        icon: "react",
        text: "React Native",
    },
    {
        icon: "nextjs",
        text: "Next.js",
    },
    {
        icon: "nodejs",
        text: "Node.js",
    },
    {
        icon: "mysql",
        text: "MySQL",
    },
    {
        icon: "mongodb",
        text: "MongoDB",
    },
    {
        icon: "graphql",
        text: "GraphQL",
    },
];

const style = {
    border: "1px solid #ddd",
    backgroundColor: "grey.100",
    lineHeight: "30px",
    borderRadius: "5px",
    padding: "20px",
};

const Home = () => (
    <BaseLayout isHome>
        <Container sx={{ ...style, mb: 5 }} maxWidth="md">
            <Typography variant="h3" component="h2">About Me</Typography>
            <p>
                Hello! My name is Artur and I enjoy creating things that live on the internet.
                My interest in web development started back in 2005 when I started an internship
                at an&nbsp;
                <ExternalLink href="https://www.md-systemhaus.de">IT system house</ExternalLink>
                .
                Turned out that I love creating things out of thin air, that other people can use.
            </p>
            <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at&nbsp;
                <ExternalLink href="https://www.tourist-online.de/">a tourist company</ExternalLink>
                ,&nbsp;
                <ExternalLink href="https://www.check24.de/">a huge corporation</ExternalLink>
                &nbsp;and a lot of freelance projects.
                My main focus these days is working remotely as a
                Freelancer for a variety of clients.
            </p>
            <p>
                Here are a few technologies I&apos;ve been working with recently:
            </p>
            <List>
                {techStack.map((item) => (
                    <ListItem key={item.text} sx={{ padding: "5px" }}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                            <DevIcon>{item.icon}</DevIcon>
                        </ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </Container>
        <Container sx={{ ...style, textAlign: "center" }} maxWidth="md">
            <Typography variant="h3" component="h2">Get in Touch</Typography>
            <p>
                I&apos;m constantly looking for new opportunities and interesting projects,
                especially frontend projects.
                <br />
                Whether you want to hire me or just want to say hi,
                I&apos;ll try my best to get back at you!
            </p>
            <a href="mailto:artur.meinzer@web.de"><Button>Say Hello</Button></a>
        </Container>
    </BaseLayout>
);

export default Home;
