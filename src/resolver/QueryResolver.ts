import { Resolver } from "@nestjs/graphql";

import type { IQuery } from "../typings/graphql";

@Resolver("Query")
export class QueryResolver implements IQuery {
    public async hello() {
        return "Hello,World!";
    }
}
