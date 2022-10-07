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
import IconButton from "@mui/material/IconButton";
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
                    <CardHeader title={project.title} />
                </AppLink>
                <Box sx={{ height: "200px" }}>
                    <ImageGallery
                        items={project.images.map((image) => ({ original: image, originalHeight: "200px" }))}
                        showThumbnails={false}
                        showBullets={project.images.length > 1}
                        showFullscreenButton={project.images.length > 1}
                        showPlayButton={false}
                        disableKeyDown
                    />
                </Box>
                <Box sx={{ background: "#D6EAF8", padding: "10px" }}>
                    {project.techStack && <TechStack iconsArray={project.techStack} />}
                </Box>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <AppLink
                        href="/projects/[id]"
                        as={`/projects/${project._id}`}
                    >
                        <Button
                            variant="outlined"
                        >
                            Learn More
                        </Button>
                    </AppLink>
                    <Box>
                        {project.website && (
                            <IconButton
                                variant="outlined"
                                onClick={(event) => {
                                    event.preventDefault();
                                    window.open(project.website);
                                }}
                            >
                                <FiExternalLink />
                            </IconButton>
                        )}
                        {project.github && (
                            <IconButton
                                variant="outlined"
                                onClick={(event) => {
                                    event.preventDefault();
                                    window.open(project.github);
                                }}
                            >
                                <BsGithub />
                            </IconButton>
                        )}
                    </Box>
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
