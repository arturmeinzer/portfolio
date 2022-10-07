import React from "react";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import BaseLayout from "../layouts/BaseLayout";
import DevIcon from "../components/shared/DevIcon";

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

const Home = () => (
    <BaseLayout isHome>
        <Container sx={{ width: "800px", lineHeight: "30px" }}>
            <h1>About Me</h1>
            <p>
                Hello! My name is Artur and I enjoy creating things that live on the internet.
                My interest in web development started back in 2005 when I started an internship
                at an&nbsp;
                <a href="https://www.md-systemhaus.de">IT system house</a>
                .
                Turned out that I love creating things out of thin air, that other people can use.
            </p>
            <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at&nbsp;
                <a href="https://www.tourist-online.de/">a tourist company</a>
                ,&nbsp;
                <a href="https://www.check24.de/">a huge corporation</a>
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
    </BaseLayout>
);

export default Home;
