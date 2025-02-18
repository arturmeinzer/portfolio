import cors from "micro-cors";
import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import mongoose from "mongoose";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import Project from "../../src/server/graphql/models/Project";
import Job from "../../src/server/graphql/models/Job";
import {
    jobTypes,
    projectTypes,
} from "../../src/server/graphql/types";
import {
    jobMutations,
    jobQueries,
    projectMutations,
    projectQueries,
} from "../../src/server/graphql/resolvers";
import * as db from "../../src/server/db/index.js";

const typeDefs = gql`
    ${projectTypes}
    ${jobTypes}

    type Query {
        project(id: ID): Project
        projects: [Project]
        job(id: ID): Job
        jobs: [Job]
    }

    type Mutation {
        createProject(input: ProjectInput): Project
        updateProject(id: ID, input: ProjectInput): Project
        deleteProject(id: ID): ID

        createJob(input: JobInput): Job
        updateJob(id: ID, input: JobInput): Job
        deleteJob(id: ID): ID
    }
`;

const resolvers = {
    Query: {
        ...projectQueries,
        ...jobQueries,
    },
    Mutation: {
        ...projectMutations,
        ...jobMutations,
    },
};

const Cors = cors();

export default Cors(async (req, res) => {
    if (req.method === "OPTIONS") {
        res.end();
        return;
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cache: "bounded",
        introspection: true,
    });

    await db.connect();
    await startServerAndCreateNextHandler(server, {
        path: "/api/graphql",
        context: async () => ({
            Project: new Project(mongoose.model("Project")),
            Job: new Job(mongoose.model("Job")),
        }),
    })(req, res);
});
