require("esbuild").build({
    entryPoints: { app: "./src/main.ts" },
    outdir: "./dist",
    bundle: true,
    platform: "node",
    target: "node16",
    define: {
        NODE_ENV: "production",
    },
    external: [
        //
        "@nestjs/microservices",
        "@nestjs/websockets/socket-module",
        "cache-manager",
        "class-transformer",
        "class-validator",
    ],
});
