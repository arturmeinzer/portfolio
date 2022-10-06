const projectFields = `
    title: String!
    content: String!
    techStack: [String]
    github: String
    website: String
    images: [String]
`;

exports.projectTypes = `
    type Project {
        _id: ID,
        ${projectFields}
    }
    
    input ProjectInput {
        ${projectFields}
    }
`;

const jobFields = `
    company: String!
    position: String!
    bullets: [String]
    startDate: String
    endDate: String
`;

exports.jobTypes = `
    type Job {
        _id: ID,
        ${jobFields}
    }
    
    input JobInput {
        ${jobFields}
    }
`;

exports.userTypes = `
    type User {
        _id: ID,
        avatar: String
        username: String
        name: String
        email: String
        role: String
    }

    input RegisterInput {
        avatar: String
        username: String!
        name: String
        email: String!
        password: String!
        passwordConfirmation: String!
    }
    
    input LoginInput {
        email: String!
        password: String!
    }
`;
