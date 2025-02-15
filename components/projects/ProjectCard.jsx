import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { BsGithub } from "react-icons/bs";
import Stack from "@mui/material/Stack";
import ImageGallery from "react-image-gallery";
import { CardHeader } from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import TechStack from "../shared/TechStack";
import ExternalLink from "../shared/ExternalLink";

const ProjectCard = ({ project, children }) => (
    <Box sx={{ width: { xs: "100%", md: "33%" } }}>
        <Box sx={{ margin: "0 10px", height: "100%" }}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardHeader
                    title={project.title}
                    titleTypographyProps={{ fontWeight: "bold" }}
                    sx={{ textAlign: "center" }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    <ImageGallery
                        items={project.images.map((image) => ({ original: image }))}
                        showThumbnails={false}
                        showPlayButton={false}
                        showBullets={project.images.length > 1}
                        showFullscreenButton={project.images.length > 1}
                        disableKeyDown
                        additionalClass="projects-gallery"
                    />
                </Box>
                <Box sx={{ background: "#D6EAF8", padding: "10px" }}>
                    {project.techStack && <TechStack iconsArray={project.techStack} />}
                </Box>
                <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box>
                        {project.website && (
                            <ExternalLink href={project.website}>
                                <IconButton variant="outlined">
                                    <FiExternalLink />
                                </IconButton>
                            </ExternalLink>
                        )}
                        {project.github && (
                            <ExternalLink href={project.github}>
                                <IconButton variant="outlined">
                                    <BsGithub />
                                </IconButton>
                            </ExternalLink>
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
