'use strict';
var passport = require('passport');
var Entry = require('../models/entries.js');
// var Game = require('../models/games.js');
// var Teams = require('../../config/teams.json');


/*Current routes:
    GET:
    get : /form -> has all forms at the moment signup, login, logout
    get : / -> serves public folder
    get : /logout -> logs user and destroys session
    get : /profile -> returns signed in user
    get : /users -> returns a json object of users, needs implementation
    
    POST:
    post: /login -> authenticates a user using passport locally
    post: /signup -> registers a user and adds to DB
    post: /entrySubmit -> saves an entry req.body must have user, week 
        games, selections which has all of the games for that week and the game 
        that has been locked.
    
*/ 
module.exports = function (app) {
    //Function to authenticate our routes
    function requireLogin(req, res, next) {
        if (!req.user) {
            res.redirect('/form'); // or render a form, etc.
        } else {
            next(); // allow the next route to run

        }

    }
    //First route which is not authenticated
    app.get('/form', (req, res) => {
        if(req.session.flash){
            console.log(req.session.flash);
        }
        res.sendfile('./form.html', {
            root: __dirname
        });

    });
    //Requireing login for all of our routes
    app.all('/',requireLogin, (req, res, next)=> {
                next();
    });
    //Authenticate user using passport
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/form',
        failureFlash: true
    }));
    //Destory and logout of session
    app.get('/logout', function (req, res) {
        req.logout();
        req.session.destroy();
        if(req.session){
            console.log(req.session+'SESSION HAS NOT BEEN DESTROYED');}
        
        res.send('Thanks For visiting');
        
    });
    //Register a user route
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/form',
        failureFlash: true,
    }));
    app.get('/profile',requireLogin, (req, res) => {
        if(req.session){
            console.log(req.session.passport.user);
           }
        
        res.json(req.user);
    });

    
    app.post('/entrySubmit', (req, res) => {
        console.log(req.body);
        var newEntry = {
            user: req.body.user,
            week: req.body.week,
            selections: 
            {
            game1: {
                pick: req.body.game1,
                lock: false
                    },
            game2: {
                   pick: req.body.game2,
                   lock: false
                    },
            game3: {
                   pick: req.body.game3,
                   lock: req.body.lock
                    },
            game4: {
                   pick: req.body.game4,
                   lock: req.body.lock
                    },
            game5: {
                   pick: req.body.game5,
                   lock: req.body.lock
                    },
            game6: {
                   pick: req.body.game6,
                   lock: req.body.lock
                    },
            game7: {
                   pick: req.body.game7,
                   lock: req.body.lock
                    },
            game8: {
                   pick: req.body.game8,
                   lock: req.body.lock
                    },
            game9: {
                   pick: req.body.game9,
                   lock: req.body.lock
                    },
            game10: {
                   pick: req.body.game10,
                   lock: req.body.lock
                    },
            game11: {
                   pick: req.body.game11,
                   lock: req.body.lock
                    },
            game12: {
                   pick: req.body.game12,
                   lock: req.body.lock
                    },
            game13: {
                   pick: req.body.game13,
                   lock: req.body.lock
                    },
            game14: {
                   pick: req.body.game14,
                   lock: req.body.lock
                    },
            game15: {
                   pick: req.body.game15,
                   lock: req.body.lock
                    },
            game16: {
                   pick: req.body.game16,
                   lock: req.body.lock
                    },
            created_at: new Date(), 
            updated_at: new Date()
        }
        };
        
        
        var newentry = new Entry(newEntry);
        newentry.save((err, entry, numRows) => {
            if (err || numRows === 0) {
                console.log(err + numRows );
            } else {
                console.log(entry);
                res.send('Entry has been submitted');
            }
        });

    });



    //********************************************************


    // Tell express to use this router with /api before.
    app.use('/', require('./users'));
    return app;
};
