import {
    NextFunction,
    Request,
    response,
    Response
} from 'express';
import logging from '../config/logging';
import {
    Race
} from '../entity/Race.Entity';
import {
    Connect,
    Query
} from '../config/mysql';
import {
    Connection
} from 'mysql';
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';
import {
    RaceRepository
} from '../lib/RaceRepository';

const NAMESPACE = "RACE";

const addRace = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a race");
    const raceRepository = getRepository(Race);

    try {
        await raceRepository.insert(req.body);
        response.json({
            message: "race has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllRaces = async (req: Request, res: Response, next: NextFunction) => {
    const raceRepository = getRepository(Race);
    try {
        await raceRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

const getRaceById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this race");
    const raceRepository = getRepository(Race);
    try {
        await raceRepository.findOne(req.params.id).then((data) => {
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

const udpateRace = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this race");
    let id = req.params.id;

    const raceRepository = getRepository(Race);

    try {
        const race = await raceRepository.findOne(id);
        if (!race) {
            const message = 'could not find that race';
            return next(message);
        }


        await raceRepository.save(req.body);

        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

export default {
    addRace,
    getAllRaces,
    getRaceById,
    udpateRace
};