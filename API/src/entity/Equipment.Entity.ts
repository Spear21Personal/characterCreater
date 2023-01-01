import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('equipment')
export class Equipment {
    static create(arg0: { 
        name: string; 
        category_id: number; 
        weapon_category_id: number; 
        cost_quantity: number; 
        cost_unit: string; 
        damage_dice: string; 
        damage_type: string; 
        range: number;
        weight: string; 
        properties_1: string; 
        properties_2: string;  
        properties_3: string; 
        properties_4: string; 
        throw_range: number;
        throw_range_long: number;  
        two_handed_damage_dice: string; 
        two_handed_damage_type: string;  
        range_long: number; 
        special: string;  
        armour_category_id: number; 
        armour_class: number;  
        armour_class_dex_bonus: string; 
        str_minimum: number; 
        stealth_disadvantage: string; 
        armour_class_max_bonus: number;  
        gear_category_id: number;
        desc_1: string; 
        desc_2: string; 
        desc_3: string; 
        desc_4: string; 
        desc_5: string; 
        quantity: number; 
        tool_category_id: number; 
        vehicle_category_id: number; 
        speed_quantity: number; 
        speed_unit: string;  
        capacity: string; 
    }) {
        throw new Error('Method not implemented.');
    }
    static find() {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    name!: string;

    @Column()
    category_id!: number;

    @Column()
    weapon_category_id!: number;

    @Column()
    cost_quantity!: number;

    @Column()
    cost_unit!: string;

    @Column()
    damage_dice!:string;

    @Column()
    damage_type!:string;

    @Column()
    range!: number;

    @Column()
    weight!: string;

    @Column()
    properties_1!: string;

    @Column()
    properties_2!: string;

    @Column()
    properties_3!: string;

    @Column()
    properties_4!: string;

    @Column()
    throw_range!: number;

    @Column()
    throw_range_long!: number;

    @Column()
    two_handed_damage_dice!: string;

    @Column()
    two_handed_damage_type!: string;

    @Column()
    range_long!: number;

    @Column("varchar", {length: 1000})
    special!:string;

    @Column()
    armour_category_id!: number;

    @Column()
    armour_class!: number;

    @Column() 
    armour_class_dex_bonus!: string;

    @Column()
    str_minimum!: number;

    @Column()
    stealth_disadvantage!: string;

    @Column()
    armour_class_max_bonus!: number;

    @Column()
    gear_category_id!: number;

    @Column("varchar", {length: 1000})
    desc_1!: string;

    @Column("varchar", {length: 1000})
    desc_2!: string;

    @Column("varchar", {length: 1000})
    desc_3!: string;

    @Column("varchar", {length: 1000})
    desc_4!: string;

    @Column("varchar", {length: 1000})
    desc_5!: string;

    @Column()
    quantity!: number;

    @Column()
    tool_category_id!: number;

    @Column()
    vehicle_category_id!: number;

    @Column()
    speed_quantity!: number;

    @Column()
    speed_unit!: string;

    @Column()
    capacity!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;



}
