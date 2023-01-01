import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { Proficiencies } from './Proficiencies.Entity';

@Entity('class')
export class Class {
    static create(arg0: { name: any; hitDie: any; subclass_id: number; spellcasting_level: number; spellcasting_ability_id: number; }) {
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
    hit_die!: string;

    @Column()
    subclass_id!: number;

    @Column()
    spellcasting_level!: number;

    @Column()
    spellcasting_ability_id!: number;

    // @ManyToMany(() => Proficiencies, (proficiencies) => proficiencies.class)
    // @JoinTable({
    //     name: "class_proficiencies",
    //     joinColumn: {
    //         name: "class_id",
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: "profificiencies_id",
    //         referencedColumnName: "id"
    //     }
    // })
    // proficiencies:Proficiencies[] | undefined;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
