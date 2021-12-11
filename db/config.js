const mysql = require('mysql');
const db_info = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '0515',
    database: 'db_user'
})
db_info.connect();
module.exports = db_info;