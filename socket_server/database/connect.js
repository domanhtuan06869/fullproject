const mysql = require('mysql');
require('dotenv').config();

const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_DATABASE || 'test'
}

module.exports = async () => new Promise(
    (resolve, reject) => {
        const connection = mysql.createConnection(config);
        connection.connect(error => {
            if (error) {
                reject(error);
                
                return;
            }
            console.log('connected mysql')
            resolve(connection);
        })
    });