import { NestFactory } from "@nestjs/core";
import { Module, Controller, Get } from "@nestjs/common";

@Controller("")
export class HelloController {
    @Get("")
    hello() {
        return { message: "Hello,World!" };
    }
}

@Module({
    controllers: [HelloController],
})
export class AppModule {}

(async (port: number) => {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
})(3000);
