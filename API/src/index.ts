import "reflect-metadata";
import { createConnection, createConnections, DatabaseType, getRepository } from 'typeorm';
// import {User} from "./entity/User";
import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import {raceRouter} from './routes/race.routes';
import { classRouter } from "./routes/class.routes";
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json'
import { abilitiesRouter } from "./routes/abilities.routes";
import { languageRouter } from "./routes/language.routes";
import mysql from 'mysql';
import { alignmentRouter } from "./routes/alignment.routes";
import { raceModifyRouter } from "./routes/raceModifiers.routes";
import {ProficienciesRouter} from "./routes/proficiencies.routes";
import { equipmentRouter } from "./routes/equipment.routes";
import { characterRouter } from "./routes/character.routes";

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'supercooldb';
const MYSQL_USER = process.env.MYSQL_HOST || 'superuser';
const MYSQL_PASS = process.env.MYSQL_HOST || 'roseville';
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;
const MYSQL_TYPE = process.env.MYSQL_TYPE || 'mysql';

const NAMESPACE = 'Server';
const app = express();
const _config = config;
const opts = {
    name: 'mysql',
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS,
    port: MYSQL_PORT,
    type: MYSQL_TYPE,
    synchronize: true,
    entities: [`${__dirname}/entities/**/*{.js,.ts}`],
    migrations: [`${__dirname}migration/**/*{.js,/ts}`]
}
createConnection().then(async connection => {
   
   
    //console.log("Loading users from the database...");
    //const users = await connection.manager.find(User);
    //console.log("Loaded users: ", users);

    console.log("Connection to DB is good");

}).catch(error => console.log(error));



/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
// app.use('/api/sample', sampleRoutes);
app.use('/api/race', raceRouter);
app.use('/api/class', classRouter);
app.use('/api/abilities', abilitiesRouter);
app.use('/api/language', languageRouter);
app.use('/api/alignments', alignmentRouter);
app.use('/api/raceModifier', raceModifyRouter);
app.use('/api/proficiencies', ProficienciesRouter);
app.use('/api/equipment', equipmentRouter);
app.use('/api/character', characterRouter);
/** enable swagger */
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(app);


app.listen(
    config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));

