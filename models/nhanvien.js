var db = require('../config/connectDb');

var nhanvien = {
    getAllNhanVien:function(callback){
        let sql = `SELECT * FROM nhanvien`;
        return db.query(sql, callback);
    },
    getByIdNhanVien:function(id, callback){
        let sql = `SELECT * FROM nhanvien WHERE idnv=?`;
        return db.query(sql,[id],callback);
    },
    addNhanVien:function(nhanvien, callback) {
        let sql = `INSERT INTO nhanvien(idnv, cmnd,tennv,gioitinh, email, ngayvao, sdt, ca, luong) VALUES(?,?,?,?,?,?,?,?,?)`;
        return db.query(sql, [nhanvien.idnv, nhanvien.cmnd, nhanvien.tennv, 
                nhanvien.gioitinh, nhanvien.sdt, 
                nhanvien.ngayvao, nhanvien.email,
                nhanvien.ca, nhanvien.luong], callback);
    },
    updateNhanVien:function(id, nhanvien, callback){
        let sql = `UPDATE nhanvien SET cmnd=?,tennv=?, gioitinh=?, sdt=?, ngayvao=?, email=?, ca=?, luong=? WHERE idnv=?`;
        return db.query(sql, [nhanvien.cmnd, nhanvien.tennv, 
            nhanvien.gioitinh, nhanvien.sdt,
            nhanvien.ngayvao, nhanvien.email,
            nhanvien.ca, nhanvien.luong, id],callback);
    },
    deleteNhanVien:function(id, callback){
        let sql = `DELETE FROM nhanvien WHERE idnv = ?`;
        return db.query(sql ,[id],callback);
    }
}
module.exports = nhanvien;