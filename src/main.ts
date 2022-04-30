import { NestFactory } from "@nestjs/core";

import { AppModule } from "./AppModule";

async function main(port: number, hostname = "localhost") {
    const app = await NestFactory.create(AppModule);
    await app.listen(port, hostname);
    console.log(`start server http://${hostname}:${port}/`);
}

main(3000).catch((err) => {
    console.error(err);
    process.exit(1);
});
