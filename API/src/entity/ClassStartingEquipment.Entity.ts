import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('classStartingEquipment')
export class ClassStartingEquipment {
    static create(arg0: { class_id: number; equipment_id_1: number; equipment_quantity_1: number;}) {
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
    equipment_id_1!: number;
    
    @Column()
    equipment_quantity_1!: number;


    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
