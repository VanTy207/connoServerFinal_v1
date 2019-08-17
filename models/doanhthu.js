var db = require('../config/connectDb');

var doanhthu = {
    getDoanhThu: function (callback) {
        let sql = `SELECT doanhthu.iddt, doanhthu.ngaylap, doanhthu.doanhthu, nhanvien.tennv 
            FROM (doanhthu INNER join nhanvien on doanhthu.idnv = nhanvien.idnv)`;
        return db.query(sql, callback);
    },
    getDetailDoanhthu: function(id, callback){
        let sql = `select ct_doanhthu.id_ctdt as ctdt, ct_doanhthu.iddt, doanhthu.ngaylap, ct_doanhthu.tienbanhang as tbh, ct_doanhthu.tienphieunhap as tpn, nhanvien.tennv 
            FROM(ct_doanhthu inner join doanhthu on ct_doanhthu.iddt = doanhthu.iddt inner join nhanvien on doanhthu.idnv = nhanvien.idnv) where ct_doanhthu.iddt = ?;`;
        return db.query(sql, [id], callback);
    },
    saveDoanhThu: function(id1,id2, callback ){
        let sql = `update doanhthu dt, (select (ct_doanhthu.tienbanhang - ct_doanhthu.tienphieunhap) as tt 
            FROM ct_doanhthu WHERE ct_doanhthu.iddt = ?) kk set dt.doanhthu = kk.tt where iddt = ?;`;
        return db.query(sql, [id1, id2], callback)
    }
}

module.exports = doanhthu;