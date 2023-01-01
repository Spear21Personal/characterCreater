import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('classSavingThrows')
export class ClassSavingThrows {
    static create(arg0: { class_id: number; ability_id_1: number; ability_id_2: number;}) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    class_id!: number;
    
    @Column()
    ability_id_1!: number;

    @Column()
    ability_id_2!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
