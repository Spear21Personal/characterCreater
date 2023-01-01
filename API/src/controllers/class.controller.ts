import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import {Class} from '../entity/Class.Entity';
import { CustomRepositoryNotFoundError, getRepository } from 'typeorm';

const NAMESPACE = "CLASS";

const addClass = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Class");
    const classRepository = getRepository(Class);
    const {  name, hitDie, primaryAbility, savingThrowProf, armorWeaponProf, description } = req.body
    try {
       
    
        await classRepository.save(req.body);
        // await Class.save();

        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
  
};

const getAllClasss = async (req: Request, res: Response, next: NextFunction) => {
    const classRepository = getRepository(Class);
    try {
        logging.info(NAMESPACE, "Getting all Classs");
        const Classs = await classRepository.find().then((data) => {
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
const udpateClass = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Class");
    let id = req.params.id;
    const ClassRepository = getRepository(Class);
    try {
        const race = await ClassRepository.findOne(id);
        if (!race) {
            const message = 'could not find that race';
            return next(message);
        }


        await ClassRepository.save(req.body);

        return res.status(201).json(req.body)
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
  
};

export default { addClass, getAllClasss, getClassById, udpateClass };