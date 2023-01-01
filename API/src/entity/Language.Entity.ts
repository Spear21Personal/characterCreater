import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany} from "typeorm";
import { Race } from "./Race.Entity";

@Entity('language')
export class Language {
    static create(arg0: { name: any; type: string; typical_speakers_1: string; typical_speakers_2: string; script: string; description: string}) {
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

    @Column()
    typical_speakers_1!: string;

    @Column()
    typical_speakers_2!: string;

    @Column()
    script!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
    

    @ManyToMany(() => Race, (race) => race.language_id)
    rave!: Race[]



}
