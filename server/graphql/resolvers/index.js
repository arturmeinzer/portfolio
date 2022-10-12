export const projectQueries = {
    project: async (root, { id }, ctx) => ctx.models.Project.getById(id),
    projects: async (root, args, ctx) => ctx.models.Project.getAll({}),
};

export const projectMutations = {
    createProject: async (root, { input }, ctx) => ctx.models.Project.create(input),
    updateProject: async (root, { id, input }, ctx) => ctx.models.Project.findAndUpdate(id, input),
    deleteProject: async (root, { id }, ctx) => {
        const deletedProject = await ctx.models.Project.findAndDelete(id);
        return deletedProject._id;
    },
};

export const jobQueries = {
    job: async (root, { id }, ctx) => ctx.models.Job.getById(id),
    jobs: async (root, args, ctx) => ctx.models.Job.getAll({}),
};

export const jobMutations = {
    createJob: async (root, { input }, ctx) => ctx.models.Job.create(input),
    updateJob: async (root, { id, input }, ctx) => ctx.models.Job.findAndUpdate(id, input),
    deleteJob: async (root, { id }, ctx) => {
        const deletedJob = await ctx.models.Job.findAndDelete(id);
        return deletedJob._id;
    },
};

export const userQueries = {
    user: async (root, args, ctx) => ctx.models.User.getAuthUser(ctx),
};

export const userMutations = {
    login: (root, { input }, ctx) => ctx.models.User.login(input, ctx),
    logout: (root, args, ctx) => ctx.models.User.logout(ctx),
    register: async (root, { input }, ctx) => {
        const registeredUser = await ctx.models.User.register(input);
        return registeredUser._id;
    },
};
