import React from "react";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import ProjectCreateForm from "../../components/forms/project/ProjectCreateForm";
import { useCreateProject } from "../../apollo/actions";
import BaseLayout from "../../layouts/BaseLayout";
import { ROLE_ADMIN } from "../../constants/roles";
import PageHeader from "../../components/shared/PageHeader";
import { handleImages } from "../../utils/firebaseImageHandler";
import withMessage from "../../hoc/withMessage";

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
            .then(async () => {
                notify("Project created successfully");
                setTimeout(async () => {
                    await router.push("/projects");
                }, 2000);
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
    withAuth(ProjectCreate, [ROLE_ADMIN], { ssr: true }),
));
