'use strict';
var User = require('../models/users.js');
var Entry = require('../models/entries.js');
var Game = require('../models/games.js');
var Teams = require('../../config/teams.json');

module.exports = function (app) {

    app.post('/login', (req, res) => {
        console.log(req.body);
        res.send('loginTODO');


    });
    
    for (var i=0; i < Teams.length; i++){
        console.log(Teams[i].code);
    }

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
    app.get('/profile', (req, res) => {

        Game.find({}, (err, games) => {
            res.json(games);
        })
    });


    //Test passport using small html form ,use angular after**************************
    app.get('/form', (req, res) => {
        save();
        res.sendfile('./form.html', {
            root: __dirname
        });
    });

    //********************************************************


    // Tell express to use this router with /api before.
    app.use('/api', require('./users'));
    return app;
};
