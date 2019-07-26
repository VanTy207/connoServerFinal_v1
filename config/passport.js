var passport =require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var db = require('./connectDb');
var flash = require('connect-flash');

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
        db.connect();
        db.query("SELECT * FROM taikhoan WHERE username = ?", [username], function (err, rows) {
          if (err) {
            return done(err);
          }
          if (!rows.length) {
            console.log(rows);
            return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
          }

          // if the user is found but the password is wrong
          if (!bcrypt.compareSync(password, rows[0].password)) {
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
          }
          // all is well, return successful user
          return done(null, rows[0]);
        });
        db.end();
      })
  );

  // hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
  passport.deserializeUser(function (id, done) {
    db.connect();
    db.query("SELECT * FROM taikhoan WHERE IdTK = ? ", [id], function (err, rows) {
      done(err, rows[0]);
    });
    db.end();
  });

  //  hàm được gọi khi xác thực thành công để lưu thông tin user vào session
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

};