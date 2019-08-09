
var menuOrders = require('../models/menuOrder');

exports.getMenuFoods = function (req, res, next) {
    let sess = req.session.passport.user;
    console.log('session role111 ' + sess.role);
    menuOrders.AllMenuFoods((err, rows)=>{
        if(err){
            res.json(err);
        } 
        else {
            obj = JSON.parse(JSON.stringify(rows));
            console.log(obj[0]);
            res.render('users/menuOrder', {
                title: 'menu foods',
                role: sess.role,
                idmon: obj.idmon,
                tenmon: obj.tenmon,
                hinhanh: obj.hinhanh,
                giamon: obj.giamon
            });
        }
    })
    
}