var nhanvien = require('../models/nhanvien')

exports.getAllNhanVien = function (req, res, next) {
    var sess = req.session.passport.user;
    nhanvien.getAllNhanVien(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            obj = JSON.parse(JSON.stringify(rows));
            console.log(obj)
            res.render('admin/nhanvien', {
                title: 'nhanvien',
                role: sess.role,
                message:'',
                idnv: obj.idnv,
                cmnd: obj.cmnd,
                tennv: obj.tennv,
                email: obj.email,
                sdt: obj.sdt
            });
        }

    })
}

exports.addNhanVien = function (req, res, next) {
    nhanvien.addNhanVien(req.body, function (err, rows) {
        console.log(req.body)
        if (err) {
            res.json(err)
        } else {
            res.redirect('/conno/admin/nhanvien');
        }
    })
}

exports.getByIdNhanVien = function (req, res, next) {
    var sess = req.session.passport.user;
    nhanvien.getByIdNhanVien(req.params.id, function (err, rows) {
        if (!err) {
            obj = JSON.parse(JSON.stringify(rows));
            res.render('admin/detail_nhanvien', {
                title: 'nhanvien detail',
                role: sess.role,
                idnv: obj.idnv,
                cmnd: obj.cmnd,
                tennv: obj.tennv,
                gioitinh: obj.gioitinh,
                email: obj.email,
                sdt: obj.sdt,
                ngayvao: obj.ngayvao,
                ca: obj.ca,
                luong: obj.luong,
            });
        } else {
            //res.json(rows);
            res.send('ban k co quyen')
        }
    })
}

exports.updateNhanVien = function (req, res, next) {
    nhanvien.updateNhanVien(req.params.id, req.body , function (err, rows) {
        console.log(req.params.id)
        console.log(req.body)
        if(err){
            res.json(err)
        } else {
            res.redirect('/conno/admin/nhanvien')
        }
    })
}

exports.deleteNhanVien = function (req, res, next) {
    nhanvien.deleteNhanVien(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.redirect('/conno/admin/nhanvien');
        }
    })
}

