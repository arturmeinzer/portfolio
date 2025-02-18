import React from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import BaseLayout from "../../../src/layouts/BaseLayout";
import ProjectCreateForm from "../../../src/components/forms/project/ProjectCreateForm";
import { useGetProject, useUpdateProject } from "../../../src/apollo/actions";
import withAuth from "../../../src/hoc/withAuth";
import withApollo from "../../../src/hoc/withApollo";
import withMessage from "../../../src/hoc/withMessage";
import PageHeader from "../../../src/components/shared/PageHeader";
import { handleImages } from "../../../src/utils/firebaseImageHandler";

const ProjectEdit = ({ notify }) => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetProject({ variables: { id } });
    const [updateProject, { error }] = useUpdateProject();

    const resolveData = (initialData) => {
        if (!initialData) {
            return initialData;
        }

        const images = initialData.images.length > 0
            ? initialData.images.map((image) => ({ url: image }))
            : [];

        return {
            ...initialData,
            images,
        };
    };

    const handleEdit = async (projectData) => {
        let images = [];
        if (projectData.images.length > 0) {
            images = await handleImages(projectData.images, data.project.images);
        }

        const updatedData = {
            ...projectData,
            images,
        };

        updateProject({ variables: { id, ...updatedData } })
            .then(() => {
                notify("Project updated successfully", () => {
                    router.push("/projects");
                });
            })
            .catch(() => {});
    };

    return (
        <BaseLayout notify={notify}>
            <PageHeader>Edit Project</PageHeader>
            { data && (
                <ProjectCreateForm
                    initialData={resolveData(data.project)}
                    onSubmit={handleEdit}
                />
            )}
            { error && <Alert severity="error">{error.message}</Alert> }
        </BaseLayout>
    );
};

ProjectEdit.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(
    withApollo(withAuth(ProjectEdit)),
);
