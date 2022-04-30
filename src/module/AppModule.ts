import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { HelloController } from "../controller/HelloController";
import { QueryResolver } from "../resolver/QueryResolver";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: [
                //
                "./**/*.graphql",
            ],
            path: "/graphql",
            playground: false,
            plugins: [
                //
                ApolloServerPluginLandingPageGraphQLPlayground(),
            ],
            debug: true,
        }),
        QueryResolver,
    ],
    controllers: [
        //
        HelloController,
    ],
})
export class AppModule {}
