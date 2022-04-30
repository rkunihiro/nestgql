const { build, analyzeMetafile } = require("esbuild");

build({
    entryPoints: { app: "./src/main.ts" },
    outdir: "./dist",

    bundle: true,
    minify: true,
    sourcemap: true,
    metafile: true,

    platform: "node",
    target: "node16",
    format: "cjs",

    define: {
        "process.env.NODE_ENV": '"production"',
    },
    external: [
        //
        "@apollo/subgraph",
        "@apollo/gateway",
        "@nestjs/microservices",
        "@nestjs/websockets",
        "apollo-server-fastify",
        "cache-manager",
        "class-transformer",
        "class-validator",
        "fsevents",
    ],
})
    .then(({ metafile }) => analyzeMetafile(metafile))
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
