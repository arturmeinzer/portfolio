import React from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import BaseLayout from "../../../layouts/BaseLayout";
import { useGetJob, useUpdateJob } from "../../../apollo/actions";
import { ROLE_ADMIN } from "../../../constants/roles";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";
import JobCreateForm from "../../../components/forms/job/JobCreateForm";
import PageHeader from "../../../components/shared/PageHeader";

const JobEdit = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetJob({ variables: { id } });
    const [updateJob, { error }] = useUpdateJob();
    const errorMessage = (err) => err.message;

    const handleEdit = (jobData) => {
        updateJob({ variables: { id, ...jobData } })
            .then(async () => {
                await router.push("/jobs");
            })
            .catch(() => {});
    };

    const compileData = (rawData) => {
        const { startDate, endDate } = rawData;
        const compiledData = { ...rawData };

        if (startDate) {
            compiledData.startDate = new Date(parseInt(startDate, 10));
        }
        if (endDate) {
            compiledData.endDate = new Date(parseInt(endDate, 10));
        }

        return compiledData;
    };

    return (
        <BaseLayout>
            <PageHeader>Edit Job</PageHeader>
            { data && (
                <JobCreateForm
                    initialData={compileData(data.job)}
                    onSubmit={handleEdit}
                />
            )}
            { error && <Alert severity="error">{errorMessage(error)}</Alert> }
        </BaseLayout>
    );
};

export default withApollo(withAuth(JobEdit, [ROLE_ADMIN]));
