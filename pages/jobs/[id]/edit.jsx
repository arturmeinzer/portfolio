import React from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import BaseLayout from "../../../layouts/BaseLayout";
import { useGetJob, useUpdateJob } from "../../../apollo/actions";
import withAuth from "../../../hoc/withAuth";
import withApollo from "../../../hoc/withApollo";
import JobCreateForm from "../../../components/forms/job/JobCreateForm";
import PageHeader from "../../../components/shared/PageHeader";
import withMessage from "../../../hoc/withMessage.jsx";

const JobEdit = ({ notify }) => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetJob({ variables: { id } });
    const [updateJob, { error }] = useUpdateJob();

    const handleEdit = (jobData) => {
        updateJob({ variables: { id, ...jobData } })
            .then(() => {
                notify("Job updated successfully", () => {
                    router.push("/cv");
                });
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
            { error && <Alert severity="error">{error.message}</Alert> }
        </BaseLayout>
    );
};

JobEdit.propTypes = {
    notify: PropTypes.func.isRequired,
};

export default withMessage(withApollo(withAuth(JobEdit)));
