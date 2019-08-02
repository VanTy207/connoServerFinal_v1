var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var bcrypt = require('bcrypt');
var bcrypt = require('bcryptjs');
//var bcrypt = require('bcrypt-nodejs');
var db = require('./connectDb');

module.exports = function (passport) {
  passport.use(
    'local-login',
    new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
      function (req, username, password, done) { // callback with email and password from our form
        //db.connect();
        db.query("SELECT * FROM taikhoan WHERE username = ?", [username], function (err, rows) {
          if (err) {
            return done(err);
          }
          console.log(rows[0]);
          if (!rows.length) {
            return done(null, false, req.flash('loginMessage', 'No user found.'));
            // req.flash is the way to set flashdata using connect-flash
          }

           if (!bcrypt.compare(password, rows[0].password)) {
             return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 
             // create the loginMessage and save it to session as flashdata
           }
          // all is well, return successful user
           return done(null, rows[0]);
        });
      })
  );

  // hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
  passport.deserializeUser(function (IdTK, done) {
    //db.connect();
    db.query("SELECT * FROM taikhoan WHERE IdTK = ? ", [IdTK], function (err, rows) {
      done(err, rows[0]);
    });
  });

  //  hàm được gọi khi xác thực thành công để lưu thông tin user vào session
  passport.serializeUser(function (user, done) {
    //console.log(user);
    done(null, user.IdTK);
  });

};