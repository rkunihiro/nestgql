import { NestFactory } from "@nestjs/core";

import { AppModule } from "./module/AppModule";

(async (port: number) => {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
})(3000);
