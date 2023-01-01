import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import { RaceModifier } from '../entity/RaceModifier.Entity';
import controller from '../controllers/raceModifier.controller';

const router = express.Router();
const NAMESPACE = "RACEMODIFIER";


//Get
router.get('/get', controller.getAllRaceModifiers);

//Create
router.post('/add', controller.addRaceModifier);
router.get('/get/:id', controller.getRaceModifierById);
router.put('/update/:id', controller.udpateRaceModifier) ;

export {router as raceModifyRouter};
