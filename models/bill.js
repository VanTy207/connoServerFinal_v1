var db = require('../config/connectDb');

var bills = {
    getAllBill: function (callback) {
        let sql = "SELECT hoadon.idhd, hoadon.ngaytao, hoadon.mathanhtoan, hoadon.tongtien, nhanvien.tennv FROM(hoadon INNER JOIN nhanvien ON hoadon.idnv = nhanvien.idnv); Select phieunhap.idpn, phieunhap.ngaynhap, phieunhap.tongtien, nhanvien.tennv FROM (phieunhap INNER join nhanvien on phieunhap.idnv = nhanvien.idnv); Select phieuxuat.idpx, phieuxuat.ngayxuat, nhanvien.tennv FROM (phieuxuat INNER join nhanvien on phieuxuat.idnv = nhanvien.idnv);";
        return db.query(sql, callback);
    },
    getPhieuNhapDetail:function(id, callback){
        let sql="SELECT ct_phieunhap.id_ctpn as ctpn, ct_phieunhap.idpn, mathang.tenmh, phieunhap.ngaynhap, ct_phieunhap.soluongnhap, mathang.gia, ct_phieunhap.soluongnhap * mathang.gia as tongtien, nhanvien.tennv FROM(ct_phieunhap inner join phieunhap on ct_phieunhap.idpn = phieunhap.idpn inner join nhanvien on phieunhap.idnv = nhanvien.idnv inner join mathang on ct_phieunhap.idmh = mathang.idmh) WHERE ct_phieunhap.idpn = ?;";
        return db.query(sql, [id], callback)
    },
    savePhieuNhap: function(id,idpn, callback){
        let sql = "update phieunhap pn, (select sum(ct_phieunhap.soluongnhap * mathang.gia) as tt FROM(ct_phieunhap inner join phieunhap on ct_phieunhap.idpn = phieunhap.idpn inner join nhanvien on phieunhap.idnv = nhanvien.idnv inner join mathang on ct_phieunhap.idmh = mathang.idmh) where ct_phieunhap.idpn = ?) kk set pn.tongtien = kk.tt where idpn = ?;";
        return db.query(sql, [id, idpn], callback);
    },
    getPhieuxuat: function(id, callback){
        let sql = "select ct_phieuxuat.id_ctpx as ctpx, ct_phieuxuat.idpx, mathang.tenmh, phieuxuat.ngayxuat, ct_phieuxuat.soluong, nhanvien.tennv FROM(ct_phieuxuat inner join phieuxuat on ct_phieuxuat.idpx = phieuxuat.idpx inner join nhanvien on phieuxuat.idnv = nhanvien.idnv inner join mathang on ct_phieuxuat.idmh = mathang.idmh) where phieuxuat.idpx = ?;";
        return db.query(sql, [id], callback)
    }
}

module.exports = bills;