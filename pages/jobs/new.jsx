import React from "react";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import JobCreateForm from "../../src/components/forms/job/JobCreateForm";
import withApollo from "../../src/hoc/withApollo";
import withAuth from "../../src/hoc/withAuth";
import { useCreateJob } from "../../src/apollo/actions";
import BaseLayout from "../../src/layouts/BaseLayout";
import PageHeader from "../../src/components/shared/PageHeader";
import withMessage from "../../src/hoc/withMessage.jsx";

const JobCreate = ({ notify }) => {
    const [createJob, { error }] = useCreateJob();
    const router = useRouter();

    const handleCreate = (jobData) => {
        createJob({ variables: jobData })
            .then(() => {
                notify("Job created successfully", () => {
                    router.push("/cv");
                });
            })
            .catch(() => {});
    };

    return (
        <BaseLayout>
            <PageHeader>Create new Job</PageHeader>
            <JobCreateForm onSubmit={handleCreate} />
            { error && <Alert severity="error">{error.message}</Alert> }
        </BaseLayout>
    );
};

JobCreate.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(withApollo(withAuth(JobCreate)));
