var nhanvien = require('../models/nhanvien')
exports.getByIdNhanVien = function (req, res, next) {
    nhanvien.getByIdNhanVien(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            obj = JSON.parse(JSON.stringify(rows));
            res.render('detail_nhanvien', {
                title: 'nhanvien detail',
                IdNV: obj.IdNV,
                Cmnd: obj.Cmnd,
                TenNV: obj.TenNV,
                Email: obj.Email,
                GioiTinh: obj.GioiTinh,
                Sdt: obj.Sdt,
                LuongNV: obj.LuongNV,
                Ca: obj.Ca,
                NgayVao: obj.NgayVao
            });
        }
    })
}

exports.getAllNhanVien = function (req, res, next) {
    nhanvien.getAllNhanVien(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            obj = JSON.parse(JSON.stringify(rows));
            res.render('nhanvien', {
                title: 'nhanvien',
                IdNV: obj.IdNV,
                Cmnd: obj.Cmnd,
                TenNV: obj.TenNV,
                Email: obj.Email,
                Sdt: obj.Sdt
            });
        }

    })
}
exports.addNhanVien = function(req, res,next){
    nhanvien.addNhanVien(req.body, function(err, rows){
        if(err){
            res.json(err);
        }else{
            res.json(req.body);
        }
    })
}
exports.updateNhanVien = function (req, res, next) {
    nhanvien.updateNhanVien(id, data, function (err, row) {
        let data = req.body;
        let id = req.params.id;
    })
}

exports.deleteNhanVien = function (req, res, next) {
    nhanvien.deleteNhanVien(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
}

