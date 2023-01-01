import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import { Language } from '../entity/Language.Entity';
import controller from '../controllers/language.controller';

const router = express.Router();
const NAMESPACE = "LANGUAGE";

//Get
router.get('/get', controller.getALlLanguages);

//Create
router.post('/add',controller.addLanguage) ;

router.get('/get/:id', controller.getLanguageById);
router.put('/update/:id', controller.udpateLanguage);

export {router as languageRouter};

