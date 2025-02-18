import React, { useContext } from "react";
import { getDataFromTree } from "@apollo/react-ssr";
import { MdDelete, MdEdit } from "react-icons/md";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useGetJobs } from "../src/apollo/actions";
import withApollo from "../src/hoc/withApollo";
import JobCard from "../src/components/jobs/JobCard";
import BaseLayout from "../src/layouts/BaseLayout";
import AppLink from "../src/components/shared/AppLink";
import PageHeader from "../src/components/shared/PageHeader";
import UserContext from "../src/context/UserContext.jsx";

const Jobs = () => {
    const { data, loading } = useGetJobs();
    const user = useContext(UserContext);

    const jobs = (data && data.jobs) || [];

    return (
        <BaseLayout loading={loading}>
            <PageHeader>Jobs</PageHeader>
            <Stack direction="row" flexWrap="wrap" alignItems="stretch">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job}>
                        { user && (
                            <>
                                <AppLink
                                    href="/jobs/[id]/edit"
                                    as={`/jobs/${job._id}/edit`}
                                >
                                    <Button startIcon={<MdEdit />}>Edit</Button>
                                </AppLink>
                                <AppLink
                                    href="/jobs/[id]/delete"
                                    as={`/jobs/${job._id}/delete`}
                                >
                                    <Button startIcon={<MdDelete />} color="error">Delete</Button>
                                </AppLink>
                            </>
                        )}
                    </JobCard>
                ))}
            </Stack>
        </BaseLayout>
    );
};

export default withApollo(Jobs, { getDataFromTree });
