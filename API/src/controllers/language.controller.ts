import {
    NextFunction,
    Request,
    Response,
    response
} from 'express';
import logging from '../config/logging';
import {
    Language
} from '../entity/Language.Entity';;
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';

const NAMESPACE = "Language";

const addLanguage = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Language");
    const languageRepository = getRepository(Language);
    try {
        await languageRepository.insert(req.body);
        response.json({
            message: "language has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }


};

const getALlLanguages = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "getting all Languages");
    const languageRepository = getRepository(Language);
    try {
        await languageRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

const getLanguageById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Language");
    const languageRepository = getRepository(Language);
    let id = req.params.id;
    try {
        await languageRepository.findOne(req.params.id).then((data) => {
            if (!data) {
                const message = 'could not find that language';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }


};

const udpateLanguage = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Language");
    const languageRepository = getRepository(Language);
    try {
        const language = await languageRepository.findOne(req.params.id);
        if (!language) {
            const message = 'could not find that language';
            return next(message);
        }
        await languageRepository.save(req.body);
        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};


export default {
    addLanguage,
    getALlLanguages,
    getLanguageById,
    udpateLanguage
};