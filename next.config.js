const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.NEXT_PUBLIC_PORT, 10);

export default {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        BASE_URL: dev ? `http://localhost:${port}` : "https://www.artur-meinzer.de",
    },
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};
