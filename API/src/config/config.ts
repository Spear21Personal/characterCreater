import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'supercooldb';
const MYSQL_USER = process.env.MYSQL_HOST || 'superuser';
const MYSQL_PASS = process.env.MYSQL_HOST || 'roseville';
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;
const MYSQL_TYPE = process.env.MYSQL_TYPE || 'mysql';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS,
    port: MYSQL_PORT,
    type: MYSQL_TYPE
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
};

export default config;