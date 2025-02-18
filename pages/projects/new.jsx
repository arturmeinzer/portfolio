import React from "react";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import withApollo from "../../src/hoc/withApollo";
import withAuth from "../../src/hoc/withAuth";
import ProjectCreateForm from "../../src/components/forms/project/ProjectCreateForm";
import { useCreateProject } from "../../src/apollo/actions";
import BaseLayout from "../../src/layouts/BaseLayout";
import PageHeader from "../../src/components/shared/PageHeader";
import { handleImages } from "../../src/utils/firebaseImageHandler";
import withMessage from "../../src/hoc/withMessage";

const ProjectCreate = ({ notify }) => {
    const [createProject, { error }] = useCreateProject();
    const router = useRouter();

    const handleCreate = async (projectData) => {
        let images = [];
        if (projectData.images.length > 0) {
            images = await handleImages(projectData.images);
        }

        const updatedData = {
            ...projectData,
            images,
        };

        createProject({ variables: updatedData })
            .then(() => {
                notify("Project created successfully", () => {
                    router.push("/projects");
                });
            })
            .catch(() => {});
    };

    return (
        <BaseLayout>
            <PageHeader>Create new project</PageHeader>
            <ProjectCreateForm onSubmit={handleCreate} />
            { error && <Alert severity="error">{error.message}</Alert> }
        </BaseLayout>
    );
};

ProjectCreate.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(withApollo(
    withAuth(ProjectCreate),
));
