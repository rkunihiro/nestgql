import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { configFactory } from "./config";
import { HelloController } from "./controller/HelloController";
import { ResolverModule } from "./ResolverModule";

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
            envFilePath: ".env",
            load: [configFactory],
        }),

        TypeOrmModule.forRoot({
            type: "mysql",
            // driver: "mysql2",
            // url: "mysql://user:pass@localhost:3306/dbname",
            replication: {
                master: {
                    url: process.env["DATABASE_WRITER_URL"] ?? "",
                },
                slaves: [
                    {
                        url: process.env["DATABASE_READER_URL"] ?? "",
                    },
                ],
            },
            synchronize: false,
            autoLoadEntities: true,
            // retryAttempts: 1,
            // debug: true,
        }),

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

        ResolverModule,
    ],
    controllers: [
        //
        HelloController,
    ],
})
export class AppModule {}
