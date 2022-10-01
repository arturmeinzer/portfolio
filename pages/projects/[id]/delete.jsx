import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import BaseLayout from "../../../layouts/BaseLayout";
import { useDeleteProject } from "../../../apollo/actions";
import { ROLE_ADMIN } from "../../../constants/roles";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";
import Form from "../../../components/shared/Form";

const ProjectDelete = () => {
    const router = useRouter();
    const { id } = router.query;
    const [deleteProject, { error }] = useDeleteProject();
    const errorMessage = (err) => err.message;

    const handleDelete = () => {
        deleteProject({ variables: { id } })
            .then(async () => {
                await router.push("/projects");
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
                { error && <Alert severity="error">{errorMessage(error)}</Alert> }
            </Container>
        </BaseLayout>
    );
};

export default withApollo(withAuth(ProjectDelete, [ROLE_ADMIN]));
