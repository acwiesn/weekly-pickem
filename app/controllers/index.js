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
            req.flash('message', "Failed to authenticate")
            res.redirect("/form"); // or render a form, etc.
        } else {
            req.flash('message', "Successful logining")
            next(); // allow the next route to run

        }

    }


    app.all('/api/*',requireLogin, (req, res, next)=> {

                next();
    });
        app.all('/app/*',requireLogin, (req, res, next)=> {
                next();
    });

        //TODO: redirect failure to signup form with messge
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/form',
        failureFlash: true
    }));
    app.get('/logout', function (req, res) {
        req.logout();
        req.session.destroy();
        if(req.session){
            console.log(req.session);}
        
        res.send('loged out');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/form',
        failureFlash: true,
    }));
    app.get('/profile',requireLogin, (req, res) => {
        if(req.session.flash){
            console.log(req.session.flash);
           }
        
        res.json(req.user);
    });





    app.post('/entrySubmit', (req, res) => {
        var newEntry = {
            user: req.body.user,
            week: req.body.week,
            picks: {
            game1: req.body.game1,
            game2: req.body.game2
                    },
            lock: req.body.lock, 
            created_at: new Date(), 
            updated_at: new Date()
        }
        
        
        var newentry = new Entry(newEntry);
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
        if(req.session.flash){
            console.log(req.session.flash);
        }
        res.sendfile('./form.html', {
            root: __dirname
        });

    });
    //********************************************************


    // Tell express to use this router with /api before.
    app.use('/api', require('./users'));
    return app;
};
