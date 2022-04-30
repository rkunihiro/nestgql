import { Inject } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { PostService } from "../service/PostService";
import { UserService } from "../service/UserService";
import { IQuery, Post, User } from "../typings/graphql";

@Resolver("Post")
export class PostResolver {
    constructor(
        @Inject(PostService)
        private readonly postService: PostService,
        @Inject(UserService)
        private readonly userService: UserService,
    ) {}

    @Query()
    public async post(@Args() { id }: { id: string }): Promise<IQuery["post"]> {
        console.log("PostResolver#post", { id });
        return this.postService.findById(id);
    }

    @Query()
    public async posts(@Args() { limit, offset }: { limit?: number; offset?: number }): Promise<IQuery["posts"]> {
        console.log("PostResolver#posts", { limit, offset });
        return this.postService.findAll({
            limit,
            offset,
        });
    }

    @ResolveField()
    public async auther(@Parent() post: Post): Promise<User | null> {
        console.log("PostResolver#auther", post);
        return (await this.userService.findById(post.autherId)) ?? null;
    }
}
