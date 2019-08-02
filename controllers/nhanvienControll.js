var nhanvien = require('../models/nhanvien')

exports.getAllNhanVien = function (req, res, next) {
    nhanvien.getAllNhanVien(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            obj = JSON.parse(JSON.stringify(rows));
            console.log(obj)
            res.render('admin/nhanvien', {
                title: 'nhanvien',
                message:'',
                IdNV: obj.IdNV,
                Cmnd: obj.Cmnd,
                TenNV: obj.TenNV,
                Email: obj.Email,
                Sdt: obj.Sdt
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
            res.redirect('/conno/nhanvien');
        }
    })
}

exports.getByIdNhanVien = function (req, res, next) {
    nhanvien.getByIdNhanVien(req.params.id, function (err, rows) {
        if (!err) {
            obj = JSON.parse(JSON.stringify(rows));
            res.render('admin/detail_nhanvien', {
                title: 'nhanvien detail',
                IdNV: obj.IdNV,
                Cmnd: obj.Cmnd,
                TenNV: obj.TenNV,
                GioiTinh: obj.GioiTinh,
                Email: obj.Email,
                Sdt: obj.Sdt,
                NgayVao: obj.NgayVao,
                Ca: obj.Ca,
                LuongNV: obj.LuongNV,
            });
        } else {
            //res.json(rows);
            res.send('ban k co quyen')
        }
    })
}

exports.updateNhanVien = function (req, res, next) {
    nhanvien.updateNhanVien(req.params.id, req.body , function (err, rows) {
        console.log(req.body)
        if(err){
            res.json(err)
        } else {
           let message = req.flash('thanh cong')
            res.redirect('/conno/nhanvien/' + req.params.id, {
                message: message
            })
        }
    })
}

exports.deleteNhanVien = function (req, res, next) {
    nhanvien.deleteNhanVien(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.redirect('/conno/nhanvien');
        }
    })
}

