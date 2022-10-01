import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";
import Link from "next/link";
import {
    GET_PROJECTS,
    CREATE_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
} from "../../apollo/queries";
import withApollo from "../../hoc/withApollo";
import ProjectCard from "../../components/projects/ProjectCard";

const Projects = () => {
    const { data } = useQuery(GET_PROJECTS);

    const [updateProject] = useMutation(UPDATE_PROJECT);
    const [createProject] = useMutation(CREATE_PROJECT, {
        update: (cache, { data: { createProject: createdProject } }) => {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: {
                    projects: [
                        ...projects,
                        createdProject,
                    ],
                },
            });
        },
    });
    const [deleteProject] = useMutation(DELETE_PROJECT, {
        update: (cache, { data: { deleteProject: deletedProject } }) => {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            // eslint-disable-next-line no-underscore-dangle
            const newProjects = projects.filter((p) => p._id !== deletedProject);
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: newProjects },
            });
        },
    });

    const projects = (data && data.projects) || [];

    return (
        <>
            <section className="section-title">
                <div className="px-2">
                    <div className="pt-5 pb-4">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <button
                    onClick={createProject}
                    className="btn btn-primary">Create Project</button>
            </section>
            <section className="pb-5">
                <div className="row">
                    {
                        projects.map(project =>
                            <div key={project._id} className="col-md-4">
                                <Link
                                    href='/projects/[id]'
                                    as={`/projects/${project._id}`}>
                                    <a className="card-link">
                                        <ProjectCard project={project}/>
                                    </a>
                                </Link>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => updateProject({ variables: { id: project._id } })}>Update Project</button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteProject({ variables: { id: project._id } })}>Delete Project</button>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default withApollo(Projects, { getDataFromTree });
