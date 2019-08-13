const express = require('express');
const bodyparser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const connectDB = require('./config/connectDb');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
// const moment = require('moment');
const MySQLStore = require('express-mysql-session')(session);

var port = process.env.PORT || 3000;

const app = express();
require('./config/passport')(passport);

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
})

//support x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());

connectDB.connect(err => {
    if (!err) {
        console.log('ket noi thanh cong database');
    } else {
        console.log('ket noi that bai');
    }
})



// Express session

var sessionStore = new MySQLStore({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'cafefinal',
    multipleStatements: true
});

app.use(session({
    secret: 'secret',
    resave: false,
    store: sessionStore,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}));

app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});


// Passport middleware
app.use(passport.initialize());
//middleware được gọi ở từng request, kiểm tra session lấy ra passport.user nếu chưa có thì tạo rỗng.
app.use(passport.session());
//middleware sử dụng kịch bản Passport , sử dụng session lấy thông tin user rồi gắn vào req.user.
app.use(flash());
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

var login = require('./routes/loginRoute');
var nhanvien = require('./routes/nhanvienRoute');
var dashboard = require('./routes/dashboardRoute');
var table = require('./routes/tableRoute');
var order = require('./routes/orderRoute');
var bill = require('./routes/billRoute');
var sale = require('./routes/doanhthuRoute');
var food = require('./routes/foodsRoute');

app.use('/', login);
app.use('/conno/admin', dashboard);
app.use('/conno/admin', nhanvien);
app.use('/conno/admin', order);
app.use('/conno/admin', bill);
app.use('/conno/admin', sale);


app.use('/conno/user', table);
app.use('/conno/user', food);

app.listen(port);
console.log('localhost:' + port);

module.exports = app;