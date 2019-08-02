var db = require('../config/connectDb');

var dashboard = {
    totalNhanvien: function (callback) {
        return db.query('SELECT COUNT(IdNV) AS total FROM nhanvien; SELECT ban.TenBan, ban.TrangThai, hoadon.TongTien, ct_hoadon.SoLuong FROM (( ct_hoadon inner join ban ON ct_hoadon.IdBan = ban.IdBan) inner join hoadon on ct_hoadon.IdHD = hoadon.IdHD);', callback);
    }
}

module.exports = dashboard;