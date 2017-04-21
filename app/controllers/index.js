'use strict';
var passport = require('passport');
var User = require('../models/users.js');
var Entry = require('../models/entries.js');
// var Game = require('../models/games.js');
// var Teams = require('../../config/teams.json');

module.exports = function (app) {


    function requireLogin(req, res, next) {
        if (!req.user) {
            // require the user to log in
            res.redirect("/form"); // or render a form, etc.
        } else {
            next(); // allow the next route to run

        }

    }

        //Test passport using small html form ,use angular after**************************

    app.all('/api/*',requireLogin, (req, res, next)=> {
                next();
    });

        //TODO: redirect failure to signup form with messge
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/form',
        failureFlash: true
    }));

    app.post('/signup', (req, res) => {

        var newuser = new User(req.body);

        newuser.save((err, user, numRows) => {
            if (err) {
                if (err.code === 11000) {
                    console.log(err);
                    console.log('User already exists');
                    res.send('User already exists');
                } else {
                    console.log(err);
                }

            } else {
                req.login(user, () => {

                    res.redirect('/profile');
                });
            }

        });
    });

    app.get('/profile',requireLogin, (req, res) => {
        res.json(req.user);
    });





    app.post('/entrySubmit', (req, res) => {
        var newentry = new Entry(req.body);

        newentry.save((err, entry, numRows) => {
            if (err) {
                console.log(err);
            } else {
                console.log(entry);
                res.send('Entry has been submitted');
            }
        });

    });


    app.get('/form', (req, res) => {
        res.sendfile('./form.html', {
            root: __dirname
        });

    });
    //********************************************************


    // Tell express to use this router with /api before.
    app.use('/api', require('./users'));
    return app;
};
