import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("User")
export class User {
    @PrimaryGeneratedColumn({ type: "bigint" })
    public id = "";

    @Column({ type: "varchar" })
    public name = "";
}
