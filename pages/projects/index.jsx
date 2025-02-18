import React, { useContext } from "react";
import { getDataFromTree } from "@apollo/react-ssr";
import Button from "@mui/material/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import Stack from "@mui/material/Stack";
import { useGetProjects } from "../../src/apollo/actions";
import withApollo from "../../src/hoc/withApollo";
import ProjectCard from "../../src/components/projects/ProjectCard";
import BaseLayout from "../../src/layouts/BaseLayout";
import AppLink from "../../src/components/shared/AppLink";
import PageHeader from "../../src/components/shared/PageHeader";
import UserContext from "../../src/context/UserContext.jsx";

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
