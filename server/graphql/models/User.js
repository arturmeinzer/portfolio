class User {
    constructor(model) {
        this.Model = model;
    }

    // eslint-disable-next-line class-methods-use-this
    getAuthUser(ctx) {
        if (ctx.isAuthenticated()) {
            return ctx.getUser();
        }

        return null;
    }

    // eslint-disable-next-line class-methods-use-this
    async login(data, ctx) {
        try {
            return await ctx.authenticate(data);
        } catch (err) {
            return err;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    logout(ctx) {
        try {
            ctx.logout();
            return true;
        } catch (err) {
            return false;
        }
    }

    async register(data) {
        if (data.password !== data.passwordConfirmation) {
            throw new Error("Passwords do not match!");
        }

        try {
            return await this.Model.create(data);
        } catch (e) {
            if (e.errors) {
                const key = Object.keys(e.errors)[0];
                const error = e.errors[key];

                if (error.kind === "minlength") {
                    throw new Error(`${error.path} must be at least 6 characters long`);
                }

                if (error.kind === "regexp" && error.path === "email") {
                    throw new Error("Please provide a valid email");
                }
            }

            if (e.name === "ValidationError") {
                throw new Error("Please fill out all fields!");
            }

            if (e.name === "MongoServerError" && e.code === 11000) {
                throw new Error("User with provided email already exists!");
            }

            throw new Error("Something went wrong!");
        }
    }
}

export default User;
