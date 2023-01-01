import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import { Abilities } from '../entity/Abilities.Entity';
import controller from '../controllers/abilities.controller';


const router = express.Router();
const NAMESPACE = "ABILITIES";

//Get
router.get('/get', controller.getAllAbilities);
//Create
router.post('/add', controller.addAbility);
router.get('/get/:id', controller.getAbilityById);
router.put('/update/:id', controller.udpateAbility) ;


export {router as abilitiesRouter};

