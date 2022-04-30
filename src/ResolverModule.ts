import { Module } from "@nestjs/common";

import { DatabaseModule } from "./DatabaseModule";
import { DateScalar } from "./resolver/DateScalar";
import { PostResolver } from "./resolver/PostResolver";
import { QueryResolver } from "./resolver/QueryResolver";
import { UserResolver } from "./resolver/UserResolver";
import { PostService } from "./service/PostService";
import { UserService } from "./service/UserService";

@Module({
    imports: [DatabaseModule],
    providers: [
        //
        PostService,
        UserService,

        DateScalar,
        PostResolver,
        UserResolver,
        QueryResolver,
    ],
})
export class ResolverModule {}
