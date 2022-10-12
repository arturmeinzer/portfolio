import express from "express";
import next from "next";
import createApolloServer from "./graphql/index.js";

import * as db from "./db/index.js";
import middlewaresInit from "./middlewares/index.js";

const apolloServer = createApolloServer();
const port = parseInt(process.env.NEXT_PUBLIC_PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

db.connect();

app.prepare().then(async () => {
    const server = express();

    middlewaresInit(server, db.initSessionStore);

    await apolloServer.start();
    apolloServer.applyMiddleware({ path: "/graphql", app: server });

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});
