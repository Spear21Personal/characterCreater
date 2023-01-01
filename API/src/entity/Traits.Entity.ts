import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn} from "typeorm";
import { Race } from './Race.Entity';

@Entity('traits')
export class Traits {
    //static races: any;
    static create(arg0: { name: string; full_name:string; description: string;}) {
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
    race_id!: number;

    @Column()
    description!: string;

    // @ManyToMany(() => Race, race => race.traits)
    // races:Race[] | undefined;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
