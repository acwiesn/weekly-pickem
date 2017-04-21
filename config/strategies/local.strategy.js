'use strict';
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../app/models/users.js');

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {

        User.findOne({
            username: username
        }, (err, results) => {
            if (!results) {
                done(null, false, {
                    message: 'No user found'
                });
            } else if (results.password === password) {
                var user = results;
                done(null, user);
            } else {
                done(null, false, {
                    message: 'Bad Password'
                });
            }

        });

    }));
};
