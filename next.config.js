const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.NEXT_PUBLIC_PORT, 10);

module.exports = {
    env: {
        BASE_URL: dev ? `http://localhost:${port}` : "https://artur-meinzer.de",
    },
};
