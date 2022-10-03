const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");

const {
    projectQueries,
    projectMutations,
    jobQueries,
    userMutations,
    userQueries,
    jobMutations,
} = require("./resolvers");
const { projectTypes, jobTypes, userTypes } = require("./types");
const { buildAuthContext } = require("./context");

// GraphqlModels
const Project = require("./models/Project");
const User = require("./models/User");
const Job = require("./models/Job");

exports.createApolloServer = () => {
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
        cache: "bounded",
        context: ({ req }) => ({
            ...buildAuthContext(req),
            models: {
                Project: new Project(mongoose.model("Project"), req.user),
                Job: new Job(mongoose.model("Job"), req.user),
                User: new User(mongoose.model("User")),
            },
        }),
    });
};
