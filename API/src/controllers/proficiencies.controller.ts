import {
    NextFunction,
    Request,
    Response,
    response
} from 'express';
import logging from '../config/logging';
import {
    Proficiencies
} from '../entity/Proficiencies.Entity';;
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';

const NAMESPACE = "proficiencies";

const addProficiencies = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a proficiencies");
    const ProficienciesRepotory = getRepository(Proficiencies);
    try {
        await ProficienciesRepotory.insert(req.body);
        response.json({
            message: "proficiency has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllProficiencies = async (req: Request, res: Response, next: NextFunction) => {
    const proficienciesRepository = getRepository(Proficiencies);
    try {
        logging.info(NAMESPACE, "Getting all Proficiencies");
        await proficienciesRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getProficienciesById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this proficiencies");
    const proficienciesRepository = getRepository(Proficiencies);
    try {
        await proficienciesRepository.findOne(req.params.id).then((data) => {
            if (!data) {
                const message = 'could not find that proficiency';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const udpateProficiencies = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this proficiency");
    const proficienciesRepository = getRepository(Proficiencies);
    try {
        const proficiency = await proficienciesRepository.findOne(req.params.id);
        if (!proficiency) {
            const message = 'could not find that proficiency';
            return next(message);
        }

        await proficienciesRepository.save(req.body);

        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

export default {
    addProficiencies,
    getAllProficiencies,
    getProficienciesById,
    udpateProficiencies
};