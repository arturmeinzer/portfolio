import cors from "micro-cors";
import { ApolloServer, gql } from "apollo-server-micro";
import mongoose from "mongoose";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import Project from "../../server/graphql/models/Project";
import Job from "../../server/graphql/models/Job";
import {
    jobTypes,
    projectTypes,
} from "../../server/graphql/types";
import {
    jobMutations,
    jobQueries,
    projectMutations,
    projectQueries,
} from "../../server/graphql/resolvers";
import * as db from "../../server/db/index.js";

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
db.connect();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default Cors(async (request, res) => {
    if (request.method === "OPTIONS") {
        res.end();
        return;
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cache: "bounded",
        introspection: true,
        context: ({ req }) => ({
            models: {
                Project: new Project(mongoose.model("Project"), req.user),
                Job: new Job(mongoose.model("Job"), req.user),
            },
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    });

    await server.start();
    await server.createHandler({
        path: "/api/graphql",
    })(request, res);
});
