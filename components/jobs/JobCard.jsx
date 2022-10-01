import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { BsGithub } from "react-icons/bs";
import TechStack from "../shared/TechStack";
import AppLink from "../shared/AppLink";

const ProjectCard = ({ project, children }) => (
    <Box sx={{ width: { xs: "100%", md: "33%" }, padding: "10px" }}>
        <Card
            variant="outlined"
            onContextMenu={(e) => e.preventDefault()}
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
            <AppLink
                href="/projects/[id]"
                as={`/projects/${project._id}`}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <h5>{project.title}</h5>
                    <p>{project.content}</p>
                </CardContent>
                {project.techStack && <TechStack iconsArray={project.techStack} />}
            </AppLink>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                {children}
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
