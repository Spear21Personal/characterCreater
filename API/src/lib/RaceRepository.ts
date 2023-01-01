import { EntityRepository, Repository, getRepository } from "typeorm";
import { Race } from "../entity/Race.Entity";
import  * as util from 'util';
import { Class } from '../entity/Class.Entity';

@EntityRepository(Race)
export class RaceRepository extends Repository<Race> {
    
}