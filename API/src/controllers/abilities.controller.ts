import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Abilities } from '../entity/Abilities.Entity';
;
import { CustomRepositoryNotFoundError, getRepository } from 'typeorm';

const NAMESPACE = "ABILITY";

const addAbility = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Ability");
    const AbilityRepotory = getRepository(Abilities);
    const {  name, full_name, description } = req.body
    try {
        const newAbility = new Abilities();
        newAbility.name = name;
        newAbility.full_name = full_name;
        newAbility.description = description;
        
        await AbilityRepotory.save(newAbility);

        return res.status(201).json(newAbility)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
  
};

const getAllAbilities = async (req: Request, res: Response, next: NextFunction) => {
    const AbilityRepository = getRepository(Abilities);
    try {
        logging.info(NAMESPACE, "Getting all Abilities");
        const abilities = await AbilityRepository.find({
            select: ['id', 'name', 'full_name', 'description'],
        });
        return res.status(200).json(abilities);
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAbilityById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Ability");
    let id = req.params.id;
    const AbilityRepository = getRepository(Abilities);
    try {
        const ability =  await AbilityRepository.findOne(id, {
            select: ['id', 'full_name', 'description'],

        });
        if (!ability) {
           const message = 'could not find that Ability';
           return next(message);
        }

        return res.status(200).json(ability);
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
  
};

const udpateAbility = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Ability");
    let id = req.params.id;
    const {  name, full_name, description } = req.body;
    const abilityRepository = getRepository(Abilities);
    try {
        const ability = await abilityRepository.findOne({where: {id}});
        if (!ability) {
            const message = 'could not find that Ability';
            return next(message);
         }

         ability.name = name;
         ability.full_name = full_name;
         ability.description = description;
         await abilityRepository.save(ability);

        return res.status(201).json(ability)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
  
};

export default { addAbility, getAllAbilities, getAbilityById, udpateAbility };