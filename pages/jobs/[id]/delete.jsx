import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import BaseLayout from "../../../src/layouts/BaseLayout";
import { useDeleteJob } from "../../../src/apollo/actions";
import withAuth from "../../../src/hoc/withAuth";
import withApollo from "../../../src/hoc/withApollo";
import Form from "../../../src/components/shared/Form";
import withMessage from "../../../src/hoc/withMessage.jsx";

const JobDelete = ({ notify }) => {
    const router = useRouter();
    const { id } = router.query;
    const [deleteJob, { error }] = useDeleteJob();
    const errorMessage = (err) => err.message;

    const handleDelete = () => {
        deleteJob({ variables: { id } })
            .then(() => {
                notify("Job deleted successfully", () => {
                    router.push("/cv");
                });
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

JobDelete.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(withApollo(withAuth(JobDelete)));
