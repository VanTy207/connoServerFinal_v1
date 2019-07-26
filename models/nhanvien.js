var db = require('../config/connectDb');

var nhanvien = {
    getAllNhanVien:function(callback){
        let sql = "SELECT * FROM nhanvien";
        return db.query(sql, callback);
    },
    getByIdNhanVien:function(id, callback){
        let sql = "SELECT * FROM nhanvien WHERE IdNV=?";
        return db.query(sql,[id],callback);
    },
    addNhanVien:function(nhanvien, callback){
        let sql = "INSERT INTO nhanvien(Cmnd,TenNV,GioiTinh, Sdt, NgayVao, Email, Ca, LuongNV) VALUES(?,?,?,?,?,?,?,?)";
        return db.query(sql, [nhanvien.Cmnd, nhanvien.TenNV, 
                nhanvien.GioiTinh, nhanvien.Sdt, 
                nhanvien.NgayVao, nhanvien.Email,
                nhanvien.Ca, nhanvien.LuongNV], callback);
    },
    updateNhanVien:function(id, nhanvien, callback){
        let sql = "UPDATE nhanvien SET Cmnd=?,TenNV=?,GioiTinh=?, Sdt=?, NgayVao=?, Email=?, Ca=?, LuongNV=? WHERE IdNV=?";
        return db.query(sql, [nhanvien.Cmnd, nhanvien.TenNV, 
            nhanvien.GioiTinh, nhanvien.Sdt, 
            nhanvien.NgayVao, nhanvien.Email,
            nhanvien.Ca, nhanvien.LuongNV,id],callback);
    },
    deleteNhanVien:function(id, callback){
        let sql = "DELETE * FROM nhanvien WHERE IdNV=?";
        return db.query(sql,[id],callback);
    }
}

module.exports = nhanvien;