import React, { useContext } from "react";
import { getDataFromTree } from "@apollo/react-ssr";
import Button from "@mui/material/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import Stack from "@mui/material/Stack";
import { useGetProjects } from "../../apollo/actions";
import withApollo from "../../hoc/withApollo";
import ProjectCard from "../../components/projects/ProjectCard";
import BaseLayout from "../../layouts/BaseLayout";
import AppLink from "../../components/shared/AppLink";
import PageHeader from "../../components/shared/PageHeader";
import UserContext from "../../context/UserContext.jsx";

const Projects = () => {
    const { data, loading } = useGetProjects();
    const user = useContext(UserContext);

    const projects = (data && data.projects) || [];

    return (
        <BaseLayout loading={loading}>
            <PageHeader>Some Things I&apos;ve Built</PageHeader>
            <Stack
                flexDirection="row"
                flexWrap="wrap"
                alignItems="stretch"
                rowGap="20px"
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
            </Stack>
        </BaseLayout>
    );
};

export default withApollo(Projects, { getDataFromTree });
