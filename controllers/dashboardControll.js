var dashboard = require('../models/dashboard')
exports.getDashboard = function (req, res, next) {
    dashboard.totalNhanvien(function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            totals = JSON.parse(JSON.stringify(rows[0]));
            orders = JSON.parse(JSON.stringify(rows[1]));
            // var sessData = req.session.rows
            console.log(totals)
            console.log(orders)
            res.render('admin/dashboard', {
                title: 'dashboard',
                total :totals.total,
                TenBan: orders.TenBan,
                TrangThai: orders.TrangThai,
                TongTien: orders.TongTien,
                SoLuong: orders.SoLuong,
            });
        }
    })

}
