import { NextFunction, Request, response, Response } from 'express';
import logging from '../config/logging';
import { Equipment } from '../entity/Equipment.Entity';
;
import { CustomRepositoryNotFoundError, getRepository } from 'typeorm';

const NAMESPACE = "Equipment";

const addEquipment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Equipment");
    const EquipmentRepotory = getRepository(Equipment);
    try {
        await EquipmentRepotory.insert(req.body);
        response.json({
            message: "race has been inserted"
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
};

const getAllEquipment = async (req: Request, res: Response, next: NextFunction) => {
    const equipmentRepository = getRepository(Equipment);
    try {
        await equipmentRepository.find().then((data) => {
            res.status(200).json(data);
        })
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
};

const getEquipmentById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Equipment");
    let id = req.params.id;
    const equipmentRepository = getRepository(Equipment);
    try {
        await equipmentRepository.findOne(id).then((data) => {
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

const udpateEquipment = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Equipment");
    let id = req.params.id;
    const equipmentRepository = getRepository(Equipment);
    try {
        const race = await equipmentRepository.findOne(id);
        if (!race) {
            const message = 'could not find that race';
            return next(message);
        }
        await equipmentRepository.save(req.body);

        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
  
};

export default { addEquipment, getAllEquipment, getEquipmentById, udpateEquipment };