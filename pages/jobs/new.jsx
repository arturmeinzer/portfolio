import React from "react";
import Alert from "@mui/material/Alert";
import JobCreateForm from "../../components/forms/job/JobCreateForm";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useCreateJob } from "../../apollo/actions";
import BaseLayout from "../../layouts/BaseLayout";
import { ROLE_ADMIN } from "../../constants/roles";
import PageHeader from "../../components/shared/PageHeader";

const JobCreate = () => {
    const [createJob, { error }] = useCreateJob();
    const errorMessage = (err) => err.message;
    return (
        <BaseLayout>
            <PageHeader>Create new Job</PageHeader>
            <JobCreateForm onSubmit={(data) => createJob({ variables: data })} />
            { error && <Alert severity="error">{errorMessage(error)}</Alert> }
        </BaseLayout>
    );
};

export default withApollo(withAuth(JobCreate, [ROLE_ADMIN]));
