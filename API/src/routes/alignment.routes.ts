import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import { Alignment } from '../entity/Alignmennt.Entity';
import controller from '../controllers/alignment.controller';

const router = express.Router();
const NAMESPACE = "ALIGNMENT";

//Get
router.get('/get', controller.getAllAlignments)

//Create
router.post('/add', controller.addAlignment)

router.get('/get/:id', controller.getAlignmentById)

router.put('/update/:id', controller.udpateAlignment)

export {router as alignmentRouter};