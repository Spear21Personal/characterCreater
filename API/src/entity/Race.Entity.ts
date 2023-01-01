import { join } from "path";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { Proficiencies } from "./Proficiencies.Entity";
import { Traits } from './Traits.Entity';
import { Language } from './Language.Entity';

@Entity('race')
export class Race {
    static insert(body: any) {
        throw new Error('Method not implemented.');
    }
    static create(arg0: { name: any; strength: string; alignment: string; age: any; size: string; size_description: string; speed: any; description: any; starting_proficiencies_description:string; language_id:number; language_id_2: number; language_description:string; subrace_id: number; ability_bonus_id:number; ability_bonus_value:number;}) {
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
    alignment!: string;

    @Column()
    size!: string;
    
    @Column()
    size_description!: string;

    @Column()
    age!: string;

    @Column()
    speed!:  number

    @Column()
    description!: string;

    @Column()
    starting_proficiencies_description!: string;

    @Column()
    language_id!: number;

    @Column()
    language_id_2!: number;

    @Column()
    language_description!: string;

    @Column()
    subrace_id!: number;

    @Column()
    ability_bonus_id!: number;

    @Column()
    ability_bonus_value!: number;

    @ManyToMany(() => Language, (language) => language.id)
    @JoinTable()
    languages!: Language[];

    // @ManyToMany(() => Traits, (traits) => traits.races)
    // @JoinTable({
    //     name: "race_traits",
    //     joinColumn: {
    //         name: "race_id",
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: "trait_id",
    //         referencedColumnName: "id"
    //     }
    // })
    // traits: Traits[] | undefined;

    // @ManyToMany(() => Proficiencies, (proficiencies) => proficiencies.races)
    // @JoinTable({
    //     name: "class_proficiencies",
    //     joinColumn: {
    //         name: "race_id",
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
