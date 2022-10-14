import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import BaseLayout from "../../../layouts/BaseLayout";
import { useDeleteJob } from "../../../apollo/actions";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";
import Form from "../../../components/shared/Form";

const JobDelete = () => {
    const router = useRouter();
    const { id } = router.query;
    const [deleteJob, { error }] = useDeleteJob();
    const errorMessage = (err) => err.message;

    const handleDelete = () => {
        deleteJob({ variables: { id } })
            .then(async () => {
                await router.push("/jobs");
            })
            .catch(() => {});
    };

    return (
        <BaseLayout>
            <Container sx={{ width: "300px" }}>
                <Form>
                    <Alert severity="warning">Do you really want to delete this job?</Alert>
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

export default withApollo(withAuth(JobDelete));
