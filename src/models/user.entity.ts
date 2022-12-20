import {Column, Entity, PrimaryGeneratedColumn, Generated} from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: false, unique: true})
    username: string

    @Column({nullable: false, unique: true})
    email: string

    @Column({nullable: false})
    @Generated("uuid")
    password: string

    @Column({default: false})
    confirmed: boolean
}