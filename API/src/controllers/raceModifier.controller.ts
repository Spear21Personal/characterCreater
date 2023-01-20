import {
    NextFunction,
    Request,
    Response,
    response
} from 'express';
import logging from '../config/logging';
import {
    RaceModifier
} from '../entity/RaceModifier.Entity';;
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';

const NAMESPACE = "RACEMODIFIER";

const addRaceModifier = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a RaceModifier");
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        await raceModifierRepository.insert(req.body);
        response.json({
            message: "race has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllRaceModifiers = async (req: Request, res: Response, next: NextFunction) => {
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        await raceModifierRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getRaceModifierById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this RaceModifier");
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        await raceModifierRepository.findOne(req.params.id).then((data) => {
            if (!data) {
                const message = 'could not find that race';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const udpateRaceModifier = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this RaceModifier");
    const raceModifierRepository = getRepository(RaceModifier);
    try {
        const race = await raceModifierRepository.findOne(req.params.id);
        if (!race) {
            const message = 'could not find that race';
            return next(message);
        }
        await raceModifierRepository.save(req.body);
        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

export default {
    addRaceModifier,
    getAllRaceModifiers,
    getRaceModifierById,
    udpateRaceModifier
};