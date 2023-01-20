import {
    NextFunction,
    Request,
    Response,
    response
} from 'express';
import logging from '../config/logging';
import {
    Class
} from '../entity/Class.Entity';
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';

const NAMESPACE = "CLASS";

const addClass = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Class");
    const classRepository = getRepository(Class);
    try {
        await classRepository.insert(req.body);
        response.json({
            message: "class has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllClasss = async (req: Request, res: Response, next: NextFunction) => {
    const classRepository = getRepository(Class);
    try {
        await classRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

const getClassById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Class");
    let id = req.params.id;
    const classRepository = getRepository(Class);
    try {
        await classRepository.findOne(req.params.id).then((data) => {
            if (!data) {
                const message = 'could not find that class';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }


};
const udpateClass = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Class");
    let id = req.params.id;
    const ClassRepository = getRepository(Class);
    try {
        const classes = await ClassRepository.findOne(id);
        if (!classes) {
            const message = 'could not find that class';
            return next(message);
        }
        await ClassRepository.save(req.body);
        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

export default {
    addClass,
    getAllClasss,
    getClassById,
    udpateClass
};