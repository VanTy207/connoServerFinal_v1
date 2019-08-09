var db = require('../config/connectDb');

var tables = {
    AllTable: function (callback) {
        let sql = "SELECT * FROM ban";
        return db.query(sql, callback);
    }
}

module.exports = tables;