const passport = require("passport");

const authenticateUser = (req, options) => new Promise((resolve, reject) => {
    const done = (err, user) => {
        if (err) {
            return reject(new Error(err));
        }
        if (user) {
            req.login(user, (loginErr) => {
                if (loginErr) { return reject(new Error(loginErr)); }
                return resolve(user);
            });
        }

        return reject(new Error("Invalid password or email!"));
    };

    const authFn = passport.authenticate("graphql", options, done);
    authFn();
});

exports.buildAuthContext = (req) => ({
    authenticate: (options) => authenticateUser(req, options),
    logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user,
});
