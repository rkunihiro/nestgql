import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Post")
export class Post {
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    public id = "";

    @Column({ name: "autherId", type: "bigint" })
    public autherId = "";

    @Column({ name: "title", type: "varchar" })
    public title = "";
}
