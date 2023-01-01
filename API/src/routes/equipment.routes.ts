import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import controller from '../controllers/race.controller';
import { Equipment } from '../entity/Equipment.Entity';

const router = express.Router();
const NAMESPACE = "EQUIPMENT";

router.get('/', controller.getAllRaces);
router.post('/', controller.addRace);
router.get('/:id', controller.getRaceById);
router.put('/:id', controller.udpateRace) ;

export {router as equipmentRouter};

