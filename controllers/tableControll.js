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