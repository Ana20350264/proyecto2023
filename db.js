const mysql = require('mariadb');
require('dotenv').config();

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    book: process.env.BOOK,
    autor: process.env.AUTOR,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
};

const pool = mysql.createPool(config);

module.exports = pool;