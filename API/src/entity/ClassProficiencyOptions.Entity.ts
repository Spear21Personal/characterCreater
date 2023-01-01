import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('classProficiencyOptions')
export class ClassProficiencyOptions {
    static create(arg0: { 
        class_id: number; 
        prof_choice_desc: string; 
        prof_choice_count: number; 
        prof_choice_id_1: number; 
        prof_choice_id_2: number;
        prof_choice_id_3: number;
        prof_choice_id_4: number;
        prof_choice_id_5: number;
        prof_choice_id_6: number;
       }) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({unique: true})
    class_id!: number;
    
    @Column()
    prof_choice_desc!: string;

    @Column()
    prof_choice_count!: number;
    
    @Column()
    prof_choice_id_1!: number; 

    @Column()
    prof_choice_id_2!: number;

    @Column()
    prof_choice_id_3!: number;

    @Column()
    prof_choice_id_4!: number;

    @Column()
    prof_choice_id_5!: number;

    @Column()
    prof_choice_id_6!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
