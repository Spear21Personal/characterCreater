import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('raceModifier')
export class RaceModifier {
    static create(arg0: { attribute_id: number; race_id: number; amount: number; }) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    attribute_id!: number;

    @Column({unique: true})
    race_id!: number;

    @Column()
    amount!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
