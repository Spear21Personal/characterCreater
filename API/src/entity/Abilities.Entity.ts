import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('abilities')
export class Abilities {
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
    full_name!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
