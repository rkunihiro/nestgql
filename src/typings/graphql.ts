
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Post {
    id: string;
    autherId: string;
    title: string;
    auther?: Nullable<User>;
}

export interface User {
    id: string;
    name: string;
    posts?: Nullable<Post[]>;
}

export interface IQuery {
    hello?: Nullable<string>;
    user?: Nullable<User>;
    post?: Nullable<Post>;
    posts: Post[];
}

type Nullable<T> = T | null;
