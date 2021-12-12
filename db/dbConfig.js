const fs = require("fs");
//const data = require('./dbConfig.json')
//data = fs.readFileSync();
//const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "0515",
    port: "3306",
    database: "mediaProject"
})
connection.connect();

console.log("connect database")
module.exports = connection;