var express = require('express')
var dashboard = require('../models/dashboard')
const session = require('express-session');
var moment = require('moment');

exports.getDashboard = function (req, res, next) {
    var sess = req.session.passport.user;
    console.log('session role111 ' + sess.role);
    dashboard.totalNhanvien(function (err, rows) {
        if (!err) {
            totals = JSON.parse(JSON.stringify(rows[0]));
            orderTable = JSON.parse(JSON.stringify(rows[1]));
            // console.log(totals)
            console.log(orderTable)
            res.render('admin/dashboard', {
                title: 'dashboard',
                role: sess.role,
                total: totals.id,
                idban: orderTable.idban,
                idhd: orderTable.idhd,
                tenban: orderTable.tenban,
                trangthai: orderTable.trangthai,
                mathanhtoan: orderTable.mathanhtoan,
            });
        } else {
            res.json(err);
        }
    })
}