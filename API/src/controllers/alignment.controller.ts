import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Alignment } from '../entity/Alignmennt.Entity';
;
import { CustomRepositoryNotFoundError, getRepository } from 'typeorm';

const NAMESPACE = "Alignment";

const addAlignment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Alignment");
    const AlignmentRepository = getRepository(Alignment);
    const {  name, description } = req.body
    try {
        const newAlignment = new Alignment();
        newAlignment.name = name;
         newAlignment.description = description;

        await AlignmentRepository.save(newAlignment);
        // await Alignment.save();

        return res.status(201).json(newAlignment)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getAllAlignments = async (req: Request, res: Response, next: NextFunction) => {
    const AlignmentRepository = getRepository(Alignment);
    try {
        logging.info(NAMESPACE, "Getting all Alignments");
        const Alignments = await AlignmentRepository.find({
            select: ['id', 'name', 'description'],
        });
        return res.status(200).json(Alignments);
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
        const Alignment =  await AlignmentRepository.findOne(id, {
            select: ['id', 'name', 'description'],

        });
        if (!Alignment) {
           const message = 'could not find that Alignment';
           return next(message);
        }
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
  
};

const udpateAlignment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Alignment");
    let id = req.params.id;
    const {  name, description } = req.body;
    const AlignmentRepository = getRepository(Alignment);
    try {
        const updateAlignment = await AlignmentRepository.findOne({where: {id}});
        if (!updateAlignment) {
            const message = 'could not find that Alignment';
            return next(message);
         }

         updateAlignment.name = name;
         updateAlignment.description = description;
         await AlignmentRepository.save(updateAlignment);

        return res.status(201).json(Alignment)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
  
};


export default { addAlignment, getAllAlignments, getAlignmentById, udpateAlignment };