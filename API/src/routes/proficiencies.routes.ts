import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import { Proficiencies } from '../entity/Proficiencies.Entity';
import controller from '../controllers/proficiencies.controller';


const router = express.Router();
const NAMESPACE = "PROFICIENCIES";

//Get
router.get('/get', controller.getAllProficiencies);
//Create
router.post('/add', controller.addProficiencies);
router.get('/get/:id', controller.getProficienciesById);
router.put('/update/:id', controller.udpateProficiencies) ;


export {router as ProficienciesRouter};

