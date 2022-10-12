import session from "express-session";
import passport from "passport";
import initPassport from "./passport/index.js";

const init = (server, initSessionStore) => {
    initPassport(passport);

    const sess = {
        name: "portfolio-session",
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: 2 * 60 * 60 * 1000 },
        resave: false,
        saveUninitialized: false,
        store: initSessionStore(),
    };

    if (process.env.NODE_ENV === "production") {
        server.set("trust proxy", 1);
        sess.cookie.secure = true;
        sess.cookie.httpOnly = true;
        sess.cookie.sameSite = true;
        sess.cookie.domain = process.env.DOMAIN;
    }

    server.use(session(sess));
    server.use(passport.initialize({}));
    server.use(passport.session({}));
};

export default init;
