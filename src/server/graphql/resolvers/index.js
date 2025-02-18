export const projectQueries = {
    project: async (root, { id }, ctx) => ctx.Project.getById(id),
    projects: async (root, args, ctx) => ctx.Project.getAll({}),
};

export const projectMutations = {
    createProject: async (root, { input }, ctx) => ctx.Project.create(input),
    updateProject: async (root, { id, input }, ctx) => ctx.Project.findAndUpdate(id, input),
    deleteProject: async (root, { id }, ctx) => {
        const deletedProject = await ctx.Project.findAndDelete(id);
        return deletedProject._id;
    },
};

export const jobQueries = {
    job: async (root, { id }, ctx) => ctx.Job.getById(id),
    jobs: async (root, args, ctx) => ctx.Job.getAll({}),
};

export const jobMutations = {
    createJob: async (root, { input }, ctx) => ctx.Job.create(input),
    updateJob: async (root, { id, input }, ctx) => ctx.Job.findAndUpdate(id, input),
    deleteJob: async (root, { id }, ctx) => {
        const deletedJob = await ctx.Job.findAndDelete(id);
        return deletedJob._id;
    },
};
