import { Module } from "@nestjs/common";

import { HelloController } from "../controller/HelloController";

@Module({
    controllers: [HelloController],
})
export class AppModule {}
