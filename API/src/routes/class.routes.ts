import express, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logging from '../config/logging';
import controller from '../controllers/class.controller';
import { Class } from '../entity/Class.Entity';

const router = express.Router();
const NAMESPACE = "CLASS";

//Get
router.get('/get', controller.getAllClasss)

//Create
router.post('/add', controller.addClass)

router.get('/get/:id', controller.getClassById)

router.put('/update/:id', controller.udpateClass)

export {router as classRouter};

