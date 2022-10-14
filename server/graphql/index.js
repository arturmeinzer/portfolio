import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import {
    projectQueries,
    projectMutations,
    jobQueries,
    userMutations,
    userQueries,
    jobMutations,
} from "./resolvers/index.js";
import { projectTypes, jobTypes, userTypes } from "./types/index.js";

// GraphqlModels
import Project from "./models/Project.js";
import Job from "./models/Job.js";

const createApolloServer = () => {
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

    return new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        cache: "bounded",
        context: ({ req }) => ({
            models: {
                Project: new Project(mongoose.model("Project"), req.user),
                Job: new Job(mongoose.model("Job"), req.user),
            },
        }),
    });
};

export default createApolloServer;
