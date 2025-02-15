const projectFields = `
    title: String!
    content: String!
    techStack: [String]
    github: String
    website: String
    images: [String]
`;

export const projectTypes = `
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
    position: String
    bullets: [String]
    startDate: String
    endDate: String
`;

export const jobTypes = `
    type Language {
        position: String!
        bullets: [String]
    }

    type Job {
        _id: ID,
        ${jobFields}
    }
    
    input JobInput {
        ${jobFields}
    }
`;
