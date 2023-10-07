import {
    NextFunction,
    Request,
    Response,
    response
} from 'express';
import logging from '../config/logging';
import {
    Abilities
} from '../entity/Abilities.Entity';
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';

const NAMESPACE = "ABILITY";

const addAbility = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Ability");
    const AbilityRepotory = getRepository(Abilities);
    try {
        await AbilityRepotory.insert(req.body);
        response.json({
            message: "ability has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

const getAllAbilities = async (req: Request, res: Response, next: NextFunction) => {
    const AbilityRepository = getRepository(Abilities);
    try {
        await AbilityRepository.find().then((data) => {
            res.status(200).json(data);
        })
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
        await AbilityRepository.findOne(req.params.id).then((data) => {
            if (!data) {
                const message = 'could not find that ability';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }


};

const udpateAbility = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Ability");
    let id = req.params.id;
    const abilityRepository = getRepository(Abilities);
    try {
        const ability = await abilityRepository.findOne(id);
        if (!ability) {
            const message = 'could not find that ability';
            return next(message);
        }
        await abilityRepository.save(req.body);
        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

export default {
    addAbility,
    getAllAbilities,
    getAbilityById,
    udpateAbility
};