import React from "react";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import ProjectCreateForm from "../../components/forms/project/ProjectCreateForm";
import { useCreateProject } from "../../apollo/actions";
import BaseLayout from "../../layouts/BaseLayout";
import { ROLE_ADMIN } from "../../constants/roles";

const ProjectCreate = () => {
    const [createProject, { error }] = useCreateProject();
    const router = useRouter();
    const errorMessage = (err) => err.message;

    const handleCreate = async (data) => {
        try {
            await createProject({ variables: data });
            await router.push("/projects");
        } catch (err) {
            errorMessage(err);
        }
    };

    return (
        <BaseLayout>
            <h1>Create new project</h1>
            <ProjectCreateForm onSubmit={handleCreate} />
            { error && <Alert severity="error">{errorMessage(error)}</Alert> }
        </BaseLayout>
    );
};

export default withApollo(withAuth(ProjectCreate, [ROLE_ADMIN]));
