import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('classProficiencies')
export class ClassProficiencies {
    static create(arg0: { class_id: number; prof_id: number;}) {
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
    prof_id!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
