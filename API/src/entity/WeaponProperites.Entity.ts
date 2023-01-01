import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('weaponProperties')
export class WeaponProperties {
    static create(arg0: { name: string; desc_1: string; desc_2: string;}) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    name!: string;
    
    @Column("varchar", {length: 1000})
    desc_1!: string;

    @Column("varchar", {length: 1000})
    desc_2!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
