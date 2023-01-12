import {
    NextFunction,
    query,
    Request,
    response,
    Response
} from 'express';
import logging from '../config/logging';
//import { Character } from '../entity/Character.Entity';
import {
    Connect,
    Query
} from '../config/mysql';
import {
    Connection
} from 'mysql';
import {
    CustomRepositoryNotFoundError,
    getManager,
    EntityManager,
    getRepository
} from 'typeorm';
import {
    Race
} from '../entity/Race.Entity';
//import {CharacterRepository} from '../lib/CharacterRepository';
import {
    ClassStartingEquipment
} from '../entity/ClassStartingEquipment.Entity';
import {
    Class
} from '../entity/Class.Entity';
import {
    Equipment
} from '../entity/Equipment.Entity';
import {
    updateShorthandPropertyAssignment
} from 'typescript';

const NAMESPACE = "Character";

const getCharacter = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Character");
    const raceRepository = getRepository(Race);
    let id = req.params.id;
    const sql = `SELECT 
                 r.name as race_name,
                 r.alignment,
                 r.size,
                 r.size_description,
                 r.language_description as lang_overview,
                 l.name as language_name,
                 l.description as lang_description,
                 s.name as subrace_name,
                 s.description as subrace_description

                 FROM race r LEFT JOIN language l on r.language_id = l.id
                 join subraces s on r.subrace_id = s.id
                 ORDER BY r.name
                 `

    try {
        await raceRepository.query(sql).then((data: any) => {
            if (!data) {
                const message = 'could not find that Character';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getClassStartingEquipment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this starting equipment");
    const classEquipRepository = getRepository(ClassStartingEquipment);
    let id = req.params.id;
    const sql = `SELECT 
            c.name as class_name,
            c.hit_die as hit_die,
            
            e.name as equip_name,
            e.cost_unit as equip_cost_unit,
            e.damage_dice as equip_damage_dice,
            e.damage_type as equip_damage_type,
            e.range as equip_range,
            e.weight as eqip_weight,
            e.properties_1 as equip_prop_1,
            e.properties_2 as equip_prop_2,
            e.properties_3 as equip_throw_range,
            e.throw_range_long as equip_throw_range_long,
            e.two_handed_damage_dice as equip_two_handed_damage_dice,
            e.two_handed_damage_type as equip_two_handed_damage_type,
            e.range_long as equip_range_long,
            e.armour_class as armour_class,
            e.armour_class_dex_bonus as equip_armour_class_dex_bonus,
            e.str_minimum as str_minimum,
            e.stealth_disadvantage as equip_stealth_disadvantage
            
            
            FROM classStartingEquipment cse
            JOIN class c ON cse.class_id = c.id
            JOIN equipment e ON cse.equipment_id_1 = e.id 
            GROUP BY c.name
            ORDER BY c.name
                 `

    try {
        await classEquipRepository.query(sql).then((data: any) => {
            let startEquipment: any = {};
            if (!data) {
                const message = 'could not find that Character';
                return next(message);
            }
            for (let i = 0; i < data.length; i++) {
                let equipment: {
                    equip_name: any;equip_cost_unit: any;equip_damage_dice: any;equip_damage_type: any;equip_range: any;
                } [] = [];
                let _tempEquipment = {
                    equip_name: data[i].equip_name,
                    equip_cost_unit: data[i].equip_cost_unit,
                    equip_damage_dice: data[i].equip_damage_dice,
                    equip_damage_type: data[i].equip_damage_type,
                    equip_range: data[i].equip_range,
                }
                equipment.push(_tempEquipment);
                let _tempStart = {
                    name: data[i].class_name,
                    class_description: data[i].class_description,
                    equipment: equipment
                }
                if (!startEquipment[data[i].class_name]) {
                    startEquipment[data[i].class_name] = _tempStart;
                } else {
                    startEquipment[data[i].class_name].equipment.push(_tempEquipment);
                }

            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
}


const getCharRaceIds= async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Character");
    const raceRepository = getRepository(Race);
    let id = req.params.id;
    const sql = `
            SELECT id, name FROM race
            UNION
            SELECT id, name FROM class 
                 `

    try {
        await raceRepository.query(sql).then((data: any) => {
            if (!data) {
                const message = 'could not find that Character';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

export default {
    getCharacter,
    getClassStartingEquipment,
    getCharRaceIds
};