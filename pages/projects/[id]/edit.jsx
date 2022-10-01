import React from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import BaseLayout from "../../../layouts/BaseLayout";
import ProjectCreateForm from "../../../components/forms/project/ProjectCreateForm";
import { useGetProject, useUpdateProject } from "../../../apollo/actions";
import { ROLE_ADMIN } from "../../../constants/roles";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";

const ProjectEdit = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetProject({ variables: { id } });
    const [updateProject, { error }] = useUpdateProject();
    const errorMessage = (err) => err.message;

    const handleEdit = (projectData) => {
        updateProject({ variables: { id, ...projectData } })
            .then(async () => {
                await router.push("/projects");
            })
            .catch(() => {});
    };

    return (
        <BaseLayout>
            <h1>Edit Project</h1>
            { data && (
                <ProjectCreateForm
                    initialData={data.project}
                    onSubmit={handleEdit}
                />
            )}
            { error && <Alert severity="error">{errorMessage(error)}</Alert> }
        </BaseLayout>
    );
};

export default withApollo(withAuth(ProjectEdit, [ROLE_ADMIN]));
