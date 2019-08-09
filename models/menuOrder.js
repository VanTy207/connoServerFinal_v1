var db = require('../config/connectDb');

var menuFoods = {
    AllMenuFoods: function (callback) {
        let sql = "SELECT * FROM mon";
        return db.query(sql, callback);
    }
}

module.exports = menuFoods;