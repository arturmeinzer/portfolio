const GraphqlStrategy = require("./strategies");
const User = require("../../db/models/user");

exports.init = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use("graphql", new GraphqlStrategy(({ email, password }, done) => {
        User.findOne({ email }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }

            const isMatching = user.validatePassword(password);
            if (!isMatching) { return done(null, false); }
            return done(null, user);
        });
    }));
};
