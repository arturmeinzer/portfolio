import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
    query Project($id: ID) {
        project(id: $id) {
            _id
            title
            content
            techStack
            github
            website
            images
        }
    }
`;

export const GET_PROJECTS = gql`
    query Projects {
        projects { 
            _id
            title
            content
            techStack
            github
            website
            images
        }
    }
`;

export const CREATE_PROJECT = gql`
    mutation CreateProject(
        $title: String!
        $content: String!
        $techStack: [String]
        $github: String
        $website: String
        $images: [String]
    ) {
        createProject(input: {
            title: $title
            content: $content
            techStack: $techStack
            github: $github
            website: $website
            images: $images
        }) {
            _id
            title
            content
            techStack
            github
            website
            images
        }
    }
`;

export const UPDATE_PROJECT = gql`
    mutation UpdateProject(
        $id: ID
        $title: String!
        $content: String!
        $techStack: [String]
        $github: String
        $website: String
        $images: [String]
    ) {
        updateProject(id: $id, input:{
            title: $title
            content: $content
            techStack: $techStack
            github: $github
            website: $website
            images: $images
        }) {
            _id
            title
            content
            techStack
            github
            website
            images
        }
    }
`;

export const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID) {
        deleteProject(id: $id)
    }
`;

// Jobs --------------------
export const GET_JOB = gql`
    query Job($id: ID) {
        job(id: $id) {
            _id
            company
            position
            bullets
            startDate
            endDate
            months @client
        }
    }
`;

export const GET_JOBS = gql`
    query Jobs {
        jobs { 
            _id
            company
            position
            bullets
            startDate
            endDate
            months @client
        }
    }
`;

export const CREATE_JOB = gql`
    mutation CreateJob(
        $company: String!
        $position: String!
        $bullets: [String]
        $startDate: String
        $endDate: String 
    ) {
        createJob(input: {
            company: $company
            position: $position
            bullets: $bullets
            startDate: $startDate
            endDate: $endDate
        }) {
            _id
            company
            position
            bullets
            startDate
            endDate
        }
    }
`;

export const UPDATE_JOB = gql`
    mutation UpdateJob(
        $id: ID
        $company: String!
        $position: String!
        $bullets: [String]
        $startDate: String
        $endDate: String
    ) {
        updateJob(id: $id, input:{
            company: $company
            position: $position
            bullets: $bullets
            startDate: $startDate
            endDate: $endDate
        }) {
            _id
            company
            position
            bullets
            startDate
            endDate
        }
    }
`;

export const DELETE_JOB = gql`
    mutation DeleteJob($id: ID) {
        deleteJob(id: $id)
    }
`;
