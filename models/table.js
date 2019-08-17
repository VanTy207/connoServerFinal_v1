var db = require('../config/connectDb');

var tables = {
    AllTable: function (callback) {
        let sql = `SELECT * FROM ban`;
        return db.query(sql, callback);
    },
    detailTable: function(id1,id2, callback){
        let sql = `SELECT hoadon.idhd,hoadon.mathanhtoan, mon.tenmon, mon.hinhanh, ct_hoadon.soluong, mon.giamon 
                FROM(ct_hoadon INNER JOIN mon on ct_hoadon.idmon = mon.idmon INNER JOIN hoadon on ct_hoadon.idhd = hoadon.idhd INNER JOIN ban on hoadon.idban = ban.idban) WHERE ban.idban = ?;
            SELECT sum(ct_hoadon.soluong * mon.giamon) as tongtien 
                FROM(ct_hoadon INNER JOIN mon on ct_hoadon.idmon = mon.idmon INNER JOIN hoadon on ct_hoadon.idhd = hoadon.idhd INNER JOIN ban on hoadon.idban = ban.idban) WHERE ban.idban = ?;`;
        return db.query(sql,[id1, id2], callback);
    }
}

module.exports = tables;