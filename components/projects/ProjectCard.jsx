import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { BsGithub } from "react-icons/bs";
import Stack from "@mui/material/Stack";
import TechStack from "../shared/TechStack";
import AppLink from "../shared/AppLink";

const ProjectCard = ({ project, children }) => (
    <Box sx={{ width: { xs: "100%", md: "33%" } }}>
        <Box sx={{ margin: "0 10px", height: "100%" }}>
            <Card
                variant="outlined"
                onContextMenu={(e) => e.preventDefault()}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <AppLink
                    href="/projects/[id]"
                    as={`/projects/${project._id}`}
                >
                    <CardContent sx={{ flexGrow: 1 }}>
                        <h3>{project.title}</h3>
                        <p>{project.content}</p>
                    </CardContent>
                    <Box sx={{ background: "#D6EAF8", padding: "10px" }}>
                        {project.techStack && <TechStack iconsArray={project.techStack} />}
                    </Box>
                </AppLink>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Stack direction="row" spacing={1}>
                        {children}
                    </Stack>
                    {project.github && (
                        <IconButton
                            onClick={(event) => {
                                event.preventDefault();
                                window.open(project.github);
                            }}
                        >
                            <BsGithub />
                        </IconButton>
                    )}
                </CardActions>
            </Card>
        </Box>
    </Box>
);

ProjectCard.propTypes = {
    project: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        techStack: PropTypes.arrayOf(PropTypes.string),
        github: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
};

ProjectCard.defaultProps = {
    children: null,
};

export default ProjectCard;
