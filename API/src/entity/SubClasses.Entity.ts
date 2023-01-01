import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('subclasses')
export class SubClasses {
    static create(arg0: { name: string; subclass_flavor: string; description: string; class_id: number;}) {
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
    subclass_flavor!: string;
    
    @Column()
    description!: string;

    @Column()
    class_id!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
