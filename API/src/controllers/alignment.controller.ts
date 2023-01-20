import {
    NextFunction,
    Request,
    Response,
    response
} from 'express';
import logging from '../config/logging';
import {
    Alignment
} from '../entity/Alignmennt.Entity';;
import {
    CustomRepositoryNotFoundError,
    getRepository
} from 'typeorm';

const NAMESPACE = "Alignment";

const addAlignment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Alignment");
    const AlignmentRepository = getRepository(Alignment);
    try {
        await AlignmentRepository.insert(req.body);
        response.json({
            message: "alignment has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllAlignments = async (req: Request, res: Response, next: NextFunction) => {
    const AlignmentRepository = getRepository(Alignment);
    try {
        await AlignmentRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

const getAlignmentById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Alignment");
    let id = req.params.id;
    const AlignmentRepository = getRepository(Alignment);
    try {
        await AlignmentRepository.findOne(req.params.id).then((data) => {
            if (!data) {
                const message = 'could not find that alignment';
                return next(message);
            }
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }


};

const udpateAlignment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Alignment");
    let id = req.params.id;
    const AlignmentRepository = getRepository(Alignment);
    try {
        const alignment = await AlignmentRepository.findOne(id);
        if (!alignment) {
            const message = 'could not find that alignment';
            return next(message);
        }
        await AlignmentRepository.save(req.body);
        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};


export default {
    addAlignment,
    getAllAlignments,
    getAlignmentById,
    udpateAlignment
};