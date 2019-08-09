const mysql = require('mysql');
const SELECT_ALL_QUERY = 'SELECT * FROM cafefinal';

const connectionDB = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'cafefinal',
    multipleStatements: true
});
module.exports = connectionDB;