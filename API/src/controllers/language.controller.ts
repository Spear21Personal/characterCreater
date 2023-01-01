import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Language } from '../entity/Language.Entity';
;
import { CustomRepositoryNotFoundError, getRepository } from 'typeorm';

const NAMESPACE = "Language";

const addLanguage = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "adding a Language");
    const languageREpository = getRepository(Language);
    const { name, type, typical_speakers_1, typical_speakers_2, script, description } = req.body
    try { 
        const newLanguage = new Language();
        newLanguage.name = name;
        newLanguage.type = type;
        newLanguage.typical_speakers_1 = typical_speakers_1;
        newLanguage.typical_speakers_2 = typical_speakers_2;
        newLanguage.script = script;
        newLanguage.description = description;
        
        await languageREpository.save(newLanguage);

        return res.status(201).json(newLanguage)


    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
  
};

const getALlLanguages = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "getting all Languages");
  
    try {
        const language = await getRepository(Language).find();
        return res.status(201).json(language);
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }

};

const getLanguageById = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this Language");
    let id = req.params.id;
    try {
        const language = await getRepository(Language).findOne(id, {
            select: ['id', 'name', 'type', 'typical_speakers_1', 'typical_speakers_2', 'script', 'description'],
        });
        

        if (!language) {
           const message = 'could not find that Language';
           return next(message);
        }

        return res.send(language);
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);
    }
   
  
};
const udpateLanguage = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "update this Language");
    try {
        const language = await getRepository(Language).findOne(req.params.id);
        getRepository(Language).merge(language!, req.body);
        const results = await getRepository(Language).save(language!);
        return res.send(results);
    } catch (err) {
        logging.error(NAMESPACE, 'Error', err);
        return res.status(500).json(err);

    }
  
};


export default { addLanguage, getALlLanguages, getLanguageById, udpateLanguage };