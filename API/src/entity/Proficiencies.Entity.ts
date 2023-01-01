import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany} from "typeorm";
import { Class } from "./Class.Entity";
import { Race } from "./Race.Entity";

@Entity('proficiencies')
export class Proficiencies {
    static create(arg0: { index: string; name: string; description: string;}) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;

    @Column()
    type!: string;

    // @ManyToMany(() => Class, classes => classes.proficiencies)
    // classes: Class[] | undefined;

    // @ManyToMany(() => Race, races => races.proficiencies)
    // races: Race[] | undefined;


    @Column("varchar", {length:255, nullable: true})
    reference_id!: string;

    @Column("varchar", {length:255, nullable: true})
    reference_name!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}


