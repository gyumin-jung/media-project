const fs = require("fs");
const data = require('./dbConfig.json')
data = fs.readFileSync('./dbConfig.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    port: conf.port,
    user: conf.user,
    password: conf.password,
    database: conf.database
})
connection.connect();
module.exports = connection;