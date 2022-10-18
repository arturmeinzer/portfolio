import React from "react";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import JobCreateForm from "../../components/forms/job/JobCreateForm";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useCreateJob } from "../../apollo/actions";
import BaseLayout from "../../layouts/BaseLayout";
import PageHeader from "../../components/shared/PageHeader";
import withMessage from "../../hoc/withMessage.jsx";

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
