var doanhthu = require('../models/doanhthu');

exports.getDoanhThu = function (req, res, next) {
    var sess = req.session.passport.user;
    doanhthu.getDoanhThu(function (err, rows) {
        if (!err) {
            arr = JSON.parse(JSON.stringify(rows));
            console.log(arr)
            res.render('admin/doanhthu', {
                title: 'doanh thu',
                role: sess.role,
                iddt: arr.iddt,
                ngaylap: arr.ngaylap,
                doanhthu: arr.doanhthu,
                tennv: arr.tennv
            });
        } else {
            res.json(err);
        }
    })
}

exports.detailDoanhThu = function (req, res, next) {
    var sess = req.session.passport.user;
    doanhthu.getDetailDoanhthu(req.params.id, function (err, rows) {
        if (!err) {
            arr = JSON.parse(JSON.stringify(rows));
            console.log(arr)
            res.render('admin/detail_doanhthu', {
                title: 'doanh thu',
                role: sess.role,
                ctdt: arr.ctdt,
                iddt: arr.iddt,
                ngaylap: arr.ngaylap,
                tbh: arr.tbh,
                tpn: arr.tpn,
                tennv: arr.tennv
            });
        } else {
            res.json(err);
        }
    })
}


exports.saveDoanhThu = function (req, res, next) {
    doanhthu.saveDoanhThu(req.params.id1, req.params.id2, function (err, rows) {
        if (!err) {
            res.redirect('/conno/admin/doanhthu');
        } else {
            res.json(err);
        }
    })
}
