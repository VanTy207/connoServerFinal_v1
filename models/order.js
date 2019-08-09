var db = require('../config/connectDb');

var orders = {
    detailOrder:function(id, tt, callback){
        let sql = "SELECT ct_hoadon.id_cthd, hoadon.idhd as hoadon, ban.idban, ban.tenban as tenban, hoadon.ngaytao, hoadon.mathanhtoan as matt, ban.trangthai as trangthai,ct_hoadon.soluong as soluongmon, mon.giamon as gia , ct_hoadon.soluong * mon.giamon as tongtien, mon.tenmon as tenmon, nhanvien.tennv as tennv from((ct_hoadon inner join hoadon on ct_hoadon.idhd = hoadon.idhd inner join ban on hoadon.idban = ban.idban inner join nhanvien on hoadon.idnv = nhanvien.idnv) inner join mon on ct_hoadon.idmon = mon.idmon) where hoadon.idban = ? and hoadon.mathanhtoan = ? ;";
        return db.query(sql,[id,tt], callback);
    },
    saveTotalOrder: function(idban, matt, idhd, callback){
        let sql = "UPDATE hoadon hd, (SELECT  sum(ct_hoadon.soluong * mon.giamon) as tt from((ct_hoadon inner join hoadon on ct_hoadon.idhd = hoadon.idhd inner join ban on hoadon.idban = ban.idban inner join nhanvien on hoadon.idnv = nhanvien.idnv) inner join mon on ct_hoadon.idmon = mon.idmon) where hoadon.idban = ? and hoadon.mathanhtoan = ?) as kk set hd.tongtien = kk.tt where idhd = ?;";
        return db.query(sql,[idban, matt, idhd], callback);
    }
}
module.exports = orders;