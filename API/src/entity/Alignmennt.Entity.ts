import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('alignment')
export class Alignment {
    static create(arg0: { name: string; desciption: string; }) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
    
    @Column()
    description!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
