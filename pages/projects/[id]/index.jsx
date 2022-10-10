import React from "react";
import { getDataFromTree } from "@apollo/react-ssr";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import withApollo from "../../../hoc/withApollo";
import BaseLayout from "../../../layouts/BaseLayout";
import TechStack from "../../../components/shared/TechStack";
import { useGetProject } from "../../../apollo/actions";

const ProjectDetail = ({ query }) => {
    const { data } = useGetProject({ variables: { id: query.id } });
    const project = (data && data.project) || {};

    return (
        <BaseLayout>
            <Container>
                <div>
                    <h1>{project.title}</h1>
                    <p>{project.content}</p>
                    <TechStack iconsArray={project.techStack ? project.techStack : []} />
                </div>
            </Container>
        </BaseLayout>
    );
};

ProjectDetail.propTypes = {
    query: PropTypes.objectOf(PropTypes.string).isRequired,
};

ProjectDetail.getInitialProps = async ({ query }) => ({ query });

export default withApollo(ProjectDetail, { getDataFromTree });
