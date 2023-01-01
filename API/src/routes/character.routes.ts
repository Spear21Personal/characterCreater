import express, { NextFunction, Request, Response } from 'express';

import logging from '../config/logging';
import controller from '../controllers/character.controller';


const router = express.Router();
const NAMESPACE = "Character";

router.get('/', controller.getCharacter);
router.get('/starting', controller.getClassStartingEquipment);
router.get('/dropStart', controller.getCharRaceIds);


export {router as characterRouter};

