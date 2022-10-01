import React from "react";
import { getDataFromTree } from "@apollo/react-ssr";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import { useGetProjects } from "../../apollo/actions";
import withApollo from "../../hoc/withApollo";
import ProjectCard from "../../components/projects/ProjectCard";
import BaseLayout from "../../layouts/BaseLayout";
import { PROP_USER } from "../../constants/props";
import withUser from "../../hoc/withUser";
import AppLink from "../../components/shared/AppLink";

const Projects = ({ user }) => {
    const { data } = useGetProjects();

    const projects = (data && data.projects) || [];

    return (
        <BaseLayout>
            <Box sx={{ px: 2, pb: 4 }}>
                <h1>Portfolio</h1>
            </Box>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                rowGap: "20px",
            }}
            >
                { projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        project={project}
                    >
                        { user && (
                            <>
                                <AppLink
                                    href="/projects/[id]/edit"
                                    as={`/projects/${project._id}/edit`}
                                >
                                    <Button startIcon={<MdEdit />}>Edit</Button>
                                </AppLink>
                                <AppLink
                                    href="/projects/[id]/delete"
                                    as={`/projects/${project._id}/delete`}
                                >
                                    <Button startIcon={<MdDelete />} color="error">Delete</Button>
                                </AppLink>
                            </>
                        )}
                    </ProjectCard>
                ))}
            </Box>
        </BaseLayout>
    );
};

Projects.propTypes = {
    user: PROP_USER,
};

Projects.defaultProps = {
    user: null,
};

export default withApollo(withUser(Projects), { getDataFromTree });
