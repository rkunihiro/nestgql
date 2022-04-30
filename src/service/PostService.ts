import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Post } from "../database/Post";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly repo: Repository<Post>,
    ) {}

    async findById(id: string): Promise<Post | undefined> {
        console.log("PostService#findById", id);
        return this.repo.findOne(id);
    }

    async findAll({ limit = 10, offset = 0 }): Promise<Post[]> {
        console.log("PostService#findAll", { limit, offset });
        return this.repo.find({
            order: {
                id: "DESC",
            },
            skip: offset,
            take: limit,
        });
    }

    async findByAutherId(autherId: string): Promise<Post[]> {
        console.log("PostService#findByAutherId", autherId);
        return this.repo.find({
            where: {
                autherId,
            },
            order: {
                id: "DESC",
            },
        });
    }
}
