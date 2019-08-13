var tables = require('../models/table')
exports.getTable = function (req, res, next) {
    var sess = req.session.passport.user;
    console.log('session role ' + sess);

    tables.AllTable((err, rows)=>{
        if(err){
            res.json(err);
        } 
        else {
            obj = JSON.parse(JSON.stringify(rows)); 
            res.render('users/table', {
                title: 'Home Table',
                role: sess,
                tenban: obj.tenban,
                trangthai: obj.trangthai
            });
        }
    })
    
}

exports.detaiFood2 = function (req, res, next) {
    var sess = req.session.passport.user;
    tables.detailTable(req.params.id1, req.params.id2, function(err, rows){
        if(err){
            res.json(err);
        } 
        else {
            obj1 = JSON.parse(JSON.stringify(rows[0]));
            console.log(obj1);
            obj2 = JSON.parse(JSON.stringify(rows[1]));
            console.log(obj2)
            res.render('users/detail_foods_2', {
                title: 'detail food',
                role: sess,
                tenmon: obj1.tenmon,
                hinhanh: obj1.hinhanh,
                soluong: obj1.soluong,
                giamon: obj1.giamon,

                tongtien: obj2.tongtien
            });
        }
    })
    
}