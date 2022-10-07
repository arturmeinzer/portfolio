const express = require("express");
const next = require("next");
const apolloServer = require("./graphql").createApolloServer();
const db = require("./db");
const middlewares = require("./middlewares");

const port = parseInt(process.env.NEXT_PUBLIC_PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

db.connect();

app.prepare().then(async () => {
    const server = express();

    middlewares.init(server, db);

    await apolloServer.start();
    apolloServer.applyMiddleware({ path: "/graphql", app: server });

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});
