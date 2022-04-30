import { Inject } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { PostService } from "../service/PostService";
import { UserService } from "../service/UserService";
import { IQuery, Post, User } from "../typings/graphql";

@Resolver("User")
export class UserResolver {
    constructor(
        @Inject(PostService)
        private readonly postService: PostService,
        @Inject(UserService)
        private readonly userService: UserService,
    ) {}

    @Query()
    public async user(@Args() { id }: { id: string }): Promise<IQuery["user"]> {
        console.log("UserResolver#user");
        return this.userService.findById(id);
    }

    @ResolveField()
    public async posts(@Parent() user: User): Promise<Post[]> {
        console.log("UserResolver#posts", user);
        return this.postService.findByAutherId(user.id);
    }
}
