var orders = require('../models/order')

exports.getByIdDetailOrder = function (req, res, next) {
    var sess = req.session.passport.user;
    orders.detailOrder(req.params.id, req.params.tt, function (err, rows) {
        console.log('id: ' + req.params.id + 'tt: '+ req.params.tt)
        if (!err) {
            arr = JSON.parse(JSON.stringify(rows));
            console.log(arr);
            res.render('admin/detail_order', {
                title: 'order detail',
                role: sess.role,
                hoadon: arr.hoadon,
                idban: arr.idban,
                tenban: arr.tenban,
                ngaytao: arr.ngaytao,
                matt: arr.matt,
                soluongmon: arr.soluongmon,
                gia: arr.gia,
                tongtien: arr.tongtien,
                tenmon: arr.tenmon,
                tennv: arr.tennv 
            });
        } else {
            //res.json(rows);
            res.send(err)
            
        }
    })
}


exports.saveTotalOrder = function (req, res, next) {
    orders.saveTotalOrder(req.params.idban, req.params.matt, req.params.idhd,function (err, rows) {
        if(err){
            res.json(err)
        } else {
            res.redirect('/conno/admin/dashboard')
        }
    })
}