import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { BsGithub } from "react-icons/bs";
import Stack from "@mui/material/Stack";
import ImageGallery from "react-image-gallery";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import { FiExternalLink } from "react-icons/fi";
import TechStack from "../shared/TechStack";
import AppLink from "../shared/AppLink";

const images = [
    {
        original: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
        original: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    },
    {
        original: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    },
];

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
                    <CardHeader title={project.title} />
                </AppLink>
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showBullets
                    showPlayButton={false}
                    disableKeyDown
                />
                <Box sx={{ background: "#D6EAF8", padding: "10px" }}>
                    {project.techStack && <TechStack iconsArray={project.techStack} />}
                </Box>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                        variant="outlined"
                        onClick={(event) => {
                            event.preventDefault();
                            window.open(project.website);
                        }}
                        endIcon={<FiExternalLink />}
                    >
                        View
                    </Button>
                    {project.github && (
                        <Button
                            variant="outlined"
                            onClick={(event) => {
                                event.preventDefault();
                                window.open(project.github);
                            }}
                            endIcon={<BsGithub />}
                        >
                            Github
                        </Button>
                    )}
                </CardActions>
                {children && (
                    <CardActions>
                        <Stack direction="row" spacing={1}>
                            {children}
                        </Stack>
                    </CardActions>
                )}
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
        images: PropTypes.arrayOf(PropTypes.string),
        website: PropTypes.string,
        github: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
};

ProjectCard.defaultProps = {
    children: null,
};

export default ProjectCard;
