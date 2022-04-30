import { Query, Resolver } from "@nestjs/graphql";

import type { IQuery } from "../typings/graphql";

@Resolver("Query")
export class QueryResolver {
    constructor() {
        // noop
    }

    @Query()
    public async hello(): Promise<IQuery["hello"]> {
        return "Hello,World!";
    }
}
