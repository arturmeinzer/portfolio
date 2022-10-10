import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import BaseLayout from "../../../layouts/BaseLayout";
import { useDeleteProject, useGetProject } from "../../../apollo/actions";
import { ROLE_ADMIN } from "../../../constants/roles";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";
import Form from "../../../components/shared/Form";
import withMessage from "../../../hoc/withMessage";

const ProjectDelete = ({ notify }) => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetProject({ variables: { id } });
    const [deleteProject, { error }] = useDeleteProject();

    const handleDelete = async () => {
        if (data?.project?.images) {
            const { deleteImages } = await import("../../../utils/firebaseImageHandler");
            await deleteImages(data.project.images);
        }

        deleteProject({ variables: { id } })
            .then(async () => {
                notify("Project deleted successfully", () => {
                    router.push("/projects");
                });
            })
            .catch(() => {});
    };

    return (
        <BaseLayout>
            <Container sx={{ width: "300px" }}>
                <Form>
                    <Alert severity="warning">Do you really want to delete this project?</Alert>
                    <Button
                        onClick={handleDelete}
                        fullWidth
                    >
                        Yes
                    </Button>
                </Form>
                { error && <Alert severity="error">{error.message}</Alert> }
            </Container>
        </BaseLayout>
    );
};

ProjectDelete.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(withApollo(withAuth(ProjectDelete, [ROLE_ADMIN])));
