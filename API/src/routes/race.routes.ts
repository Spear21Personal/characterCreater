import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import controller from '../controllers/race.controller';
import { Race } from '../entity/Race.Entity';

const router = express.Router();
const NAMESPACE = "RACE";

//Get
router.get('/get', controller.getAllRaces);

//Create
router.post('/add', controller.addRace);
router.get('/get/:id', controller.getRaceById);
router.put('/update/:id', controller.udpateRace) ;

export {router as raceRouter};

