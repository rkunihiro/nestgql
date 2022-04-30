import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Post } from "./database/Post";
import { User } from "./database/User";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            //
            Post,
            User,
        ]),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
