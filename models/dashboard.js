var db = require('../config/connectDb');

var dashboard = {
    totalNhanvien: function (callback) {
        let sql = `SELECT COUNT(idnv) AS total FROM nhanvien; 
        SELECT hoadon.idhd, hoadon.idban, ban.tenban, ban.trangthai, hoadon.mathanhtoan, nhanvien.tennv 
            from(hoadon inner join ban on hoadon.idban = ban.idban inner join nhanvien on hoadon.idnv = nhanvien.idnv) where ban.trangthai > 0;`;
        return db.query(sql, callback);
    }
}

module.exports = dashboard;