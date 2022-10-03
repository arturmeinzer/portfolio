import React from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import BaseLayout from "../../../layouts/BaseLayout";
import ProjectCreateForm from "../../../components/forms/project/ProjectCreateForm";
import { useGetProject, useUpdateProject } from "../../../apollo/actions";
import { ROLE_ADMIN } from "../../../constants/roles";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";
import withMessage from "../../../hoc/withMessage";

const ProjectEdit = ({ notify }) => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetProject({ variables: { id } });
    const [updateProject, { error }] = useUpdateProject();
    const errorMessage = (err) => err.message;

    const handleEdit = (projectData) => {
        updateProject({ variables: { id, ...projectData } })
            .then(async () => {
                notify("Project updated successfully");
                setTimeout(async () => {
                    await router.push("/projects");
                }, 2000);
            })
            .catch(() => {});
    };

    return (
        <BaseLayout notify={notify}>
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

ProjectEdit.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(withApollo(withAuth(ProjectEdit, [ROLE_ADMIN])));
