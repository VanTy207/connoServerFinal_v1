var db = require('../config/connectDb');

var menuFoods = {
    allFoods: function (callback) {
        let sql = `SELECT * FROM mon`;
        return db.query(sql, callback);
    }, 
    findProduct: function(id, callback){
        let sql = `SELECT * FROM mon WHERE idmon = ?`;
        return db.query(sql, [id], callback);
    },
    creatBill:function(id, hoadon, callback){
        let sql = `UPDATE hoadon SET cmnd=?,tennv=?, gioitinh=?, sdt=?, ngayvao=?, email=?, ca=?, luong=? WHERE idnv=?`;
        return db.query(sql, [nhanvien.cmnd, nhanvien.tennv, 
            nhanvien.gioitinh, nhanvien.sdt,
            nhanvien.ngayvao, nhanvien.email,
            nhanvien.ca, nhanvien.luong, id],callback);
    }
}

module.exports = menuFoods;