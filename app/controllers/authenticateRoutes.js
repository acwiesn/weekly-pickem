/*jshint camelcase: false */
'use strict';
var passport = require('passport');
module.exports = function (app,requireLogin) {

    //Authenticate user using passport
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/index',
        failureRedirect: '/loginforms',
        failureFlash: true
    }));
    //Destory and logout of session
    app.get('/logout', function (req, res) {

        req.logout();
        req.session.destroy();
        //Reply with a page
        res.redirect('/loginforms');

    });
    //Register a user route
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/index',
        failureRedirect: '/loginforms',
        failureFlash: true,
    }));
    app.get('/profile',requireLogin, function (req, res) {
        res.json(req.user);

    });

    return app;
};
