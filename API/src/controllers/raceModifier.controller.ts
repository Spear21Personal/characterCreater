import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { RaceModifier } from '../entity/RaceModifier.Entity';
;
import { CustomRepositoryNotFoundError, getRepository } from 'typeorm';

const NAMESPACE = "RACEMODIFIER";

const addRaceModifier = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a RaceModifier");
    const raceModifierRepository = getRepository(RaceModifier);
    const {  attribute_id, race_id, amount  } = req.body
    try {
        const newRaceModifier = new RaceModifier();
        newRaceModifier.attribute_id = attribute_id;
        newRaceModifier.race_id = race_id;
        newRaceModifier.amount = amount;

        await raceModifierRepository.save(newRaceModifier);
        // await RaceModifier.save();

        return res.status(201).json(newRaceModifier)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllRaceModifiers = async (req: Request, res: Response, next: NextFunction) => {
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        logging.info(NAMESPACE, "Getting all RaceModifiers");
        const raceModifiers = await raceModifierRepository.find({
            select: ['id', 'attribute_id', 'race_id', 'amount'],
        });
        return res.status(200).json(raceModifiers);
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getRaceModifierById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this RaceModifier");
    let id = req.params.id;
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        const raceModifier =  await raceModifierRepository.findOne(id, {
            select: ['id', 'attribute_id', 'race_id', 'amount'],

        });
        if (!raceModifier) {
           const message = 'could not find that RaceModifier';
           return next(message);
        }
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    } 
};

const udpateRaceModifier = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this RaceModifier");
    let id = req.params.id;
    const {  attribute_id, race_id, amount  } = req.body;
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        const raceModifier = await raceModifierRepository.findOne({where: {id}});
        if (!raceModifier) {
            const message = 'could not find that RaceModifier';
            return next(message);
         }

         raceModifier.attribute_id = attribute_id;
         raceModifier.race_id = race_id;
         raceModifier.amount = amount;
        await raceModifierRepository.save(raceModifier);

        return res.status(201).json(raceModifier)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

export default { addRaceModifier, getAllRaceModifiers, getRaceModifierById, udpateRaceModifier };