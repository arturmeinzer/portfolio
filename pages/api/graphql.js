import cors from "micro-cors";
import { ApolloServer, gql } from "apollo-server-micro";
import mongoose from "mongoose";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import buildAuthContext from "../../server/graphql/context";
import Project from "../../server/graphql/models/Project";
import Job from "../../server/graphql/models/Job";
import User from "../../server/graphql/models/User";
import {
    jobTypes,
    projectTypes,
    userTypes,
} from "../../server/graphql/types";
import {
    jobMutations,
    jobQueries,
    projectMutations,
    projectQueries, userMutations,
    userQueries,
} from "../../server/graphql/resolvers";
import * as db from "../../server/db/index.js";

const typeDefs = gql`
    ${projectTypes}
    ${jobTypes}
    ${userTypes}

    type Query {
        project(id: ID): Project
        projects: [Project]
        job(id: ID): Job
        jobs: [Job]
        user: User
    }

    type Mutation {
        createProject(input: ProjectInput): Project
        updateProject(id: ID, input: ProjectInput): Project
        deleteProject(id: ID): ID

        createJob(input: JobInput): Job
        updateJob(id: ID, input: JobInput): Job
        deleteJob(id: ID): ID

        login(input: LoginInput): User
        logout: Boolean
        register(input: RegisterInput): String
    }
`;

const resolvers = {
    Query: {
        ...projectQueries,
        ...jobQueries,
        ...userQueries,
    },
    Mutation: {
        ...projectMutations,
        ...jobMutations,
        ...userMutations,
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
            ...buildAuthContext(req),
            models: {
                Project: new Project(mongoose.model("Project"), req.user),
                Job: new Job(mongoose.model("Job"), req.user),
                User: new User(mongoose.model("User")),
            },
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
            // ApolloServerPluginDrainHttpServer({ httpServer }),
        ],
    });

    await server.start();
    await server.createHandler({
        path: "/api/graphql",
    })(request, res);
});
