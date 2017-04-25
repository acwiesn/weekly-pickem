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
        res.redirect('/form');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/form',
        failureFlash: true,
    }));
    app.get('/profile',requireLogin, (req, res) => {
        if(req.session){
            console.log(req.session);
           }
        
        res.json(req.user);
    });

    
    app.post('/entrySubmit', (req, res) => {
        console.log(req.body);
        var newEntry = {
            user: req.body.user,
            week: req.body.week,
            selections: {
            game1: {
                pick: req.body.game1,
                lock: req.body.lock1
                    },
            game2: {
                   pick: req.body.game2,
                   lock: req.body.lock2
                    },
            game3: {
                   pick: req.body.game3,
                   lock: req.body.lock3
                    },
            game4: {
                   pick: req.body.game4,
                   lock: req.body.lock4
                    },
            game5: {
                   pick: req.body.game5,
                   lock: req.body.lock5
                    },
            game6: {
                   pick: req.body.game6,
                   lock: req.body.lock6
                    },
            game7: {
                   pick: req.body.game7,
                   lock: req.body.lock7
                    },
            game8: {
                   pick: req.body.game8,
                   lock: req.body.lock8
                    },
            game9: {
                   pick: req.body.game9,
                   lock: req.body.lock9
                    },
            game10: {
                   pick: req.body.game10,
                   lock: req.body.lock10
                    },
            game11: {
                   pick: req.body.game11,
                   lock: req.body.lock11
                    },
            game12: {
                   pick: req.body.game12,
                   lock: req.body.lock12
                    },
            game13: {
                   pick: req.body.game13,
                   lock: req.body.lock13
                    },  
            created_at: new Date(), 
            updated_at: new Date()
        }
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
        if(req.session){
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
