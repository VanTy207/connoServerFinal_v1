
exports.getDashboard = function (req, res, next) {
    res.render('dashboard', {
        title: 'dashboard',
        Total: '123',
        Order: '3455',
        sale: '5693',
        emp: '246'
    });
}