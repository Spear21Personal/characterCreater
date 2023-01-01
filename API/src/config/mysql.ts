import "reflect-metadata";
import {createConnection, createConnections, DatabaseType} from "typeorm";
import {User} from "../entity/User";
import mysql from 'mysql';
import config from './config';

const params = {
    type: config.mysql.type as DatabaseType,
    host: config.mysql.host,
    port: config.mysql.port as number,
    username: config.mysql.user,
    password: config.mysql.pass,
    synchronize: true,
    entities: [`${__dirname}/entities/**/*{.js,.ts}`],
    migrations: [`${__dirname}migration/**/*{.js,/ts}`],
    database: config.mysql.database,
    
};

const Connect = createConnection({
    type: "mysql",
    host: config.mysql.host,
    port: config.mysql.port as number,
    username: config.mysql.user,
    password: config.mysql.pass,
    synchronize: true,
    entities: [`${__dirname}/entities/**/*{.js,.ts}`],
    migrations: [`${__dirname}/migration/**/*{.js,/ts}`],
    database: config.mysql.database,
    
})

const Query = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });

export { Connect, Query };