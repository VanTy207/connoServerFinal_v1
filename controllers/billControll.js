var bills = require('../models/bill');

exports.getBills = function (req, res, next) {
    var sess = req.session.passport.user;
    console.log('session role111 ' + sess);
    bills.getAllBill(function (err, rows) {
        if (!err) {
            hd = JSON.parse(JSON.stringify(rows[0]));
            pn = JSON.parse(JSON.stringify(rows[1]));
            px = JSON.parse(JSON.stringify(rows[2]));
            console.log(hd)
            console.log(pn)
            res.render('admin/bill', {
                title: 'bill',
                role: sess.role,
                idhd: hd.idhd,
                ngaytao: hd.ngaytao,
                mathanhtoan: hd.mathanhtoan,
                tongtien: hd.tongtien,
                tennv: hd.tennv,

                idpn: pn.idpn,
                ngaynhap: pn.ngaynhap,
                tongtien: pn.tongtien,
                tennv: pn.tennv,

                idpx: px.idpx,
                ngaynhap: px.ngayxuat,
                tennv: px.tennv
            })
        } else {
            res.json(err);
        }
    })
}

exports.PhieuNhap = function (req, res, next) {
    var sess = req.session.passport.user;
    bills.getPhieuNhapDetail(req.params.id, function (err, rows) {
        if (!err) {
            arr = JSON.parse(JSON.stringify(rows));
            console.log(arr)
            res.render('admin/detail_phieunhap', {
                title: 'phieu nhap',
                role: sess.role,
                ctpn: arr.ctpn,
                idpn: arr.idpn,
                tenmh: arr.tenmh,
                ngaynhap: arr.ngaynhap,
                soluongnhap: arr.soluongnhap,
                gia: arr.gia,
                tongtien: arr.tongtien,
                tennv: arr.tennv
            })
        } else {
            res.json(err);
        }
    })
}

exports.savePhieuNhap = function (req, res, next) {
    bills.savePhieuNhap(req.params.id, req.params.idpn, function (err, rows) {
        if (!err) {
            res.redirect('/conno/admin/bill');
        } else {
            res.json(err);
        }
    })
}

exports.PhieuNhap = function (req, res, next) {
    var sess = req.session.passport.user;
    bills.getPhieuNhapDetail(req.params.id, function (err, rows) {
        if (!err) {
            arr = JSON.parse(JSON.stringify(rows));
            console.log(arr)
            res.render('admin/detail_phieunhap', {
                title: 'phieu nhap',
                role: sess.role,
                ctpn: arr.ctpn,
                idpn: arr.idpn,
                tenmh: arr.tenmh,
                ngaynhap: arr.ngaynhap,
                soluongnhap: arr.soluongnhap,
                gia: arr.gia,
                tongtien: arr.tongtien,
                tennv: arr.tennv
            })
        } else {
            res.json(err);
        }
    })
}

exports.PhieuXuat = function (req, res, next) {
    var sess = req.session.passport.user;
    bills.getPhieuxuat(req.params.id, function (err, rows) {
        if (!err) {
            arr = JSON.parse(JSON.stringify(rows));
            console.log(arr)
            res.render('admin/detail_phieuxuat', {
                title: 'phieu nhap',
                role: sess.role,
                ctpn: arr.ctpn,
                idpx: arr.idpx,
                tenmh: arr.tenmh,
                ngayxuat: arr.ngayxuat,
                soluong: arr.soluong,
                tennv: arr.tennv
            })
        } else {
            res.json(err);
        }
    })
}