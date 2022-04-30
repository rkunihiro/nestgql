import { resolve } from "path";

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
                resolve(__dirname, "../../schema.graphql"),
            ],
            path: "/graphql",
            playground: false,
            plugins: [
                //
                ApolloServerPluginLandingPageGraphQLPlayground(),
            ],
        }),
        QueryResolver,
    ],
    controllers: [HelloController],
})
export class AppModule {}
