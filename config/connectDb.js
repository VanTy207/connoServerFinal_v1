const mysql = require('mysql');
const SELECT_ALL_QUERY = 'SELECT * FROM conocafe';

const connectionDB = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'conocafe'
});
module.exports = connectionDB;