/*jshint camelcase: false */
'use strict';
var passport = require('passport');

module.exports = function (app,requireLogin) {

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
    app.get('/profile',requireLogin, function (req, res) {
        res.json(req.user);

    });

    return app;
};
