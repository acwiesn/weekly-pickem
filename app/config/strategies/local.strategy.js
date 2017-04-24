'use strict';
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/users.js');

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {

        User.findOne({
            username: username
        }, (err, results) => {
            if(err){
                 return done(err);
            }else if (!results) {
               return done(null, false, {
                    message: 'No user found'
                });
            } else if (results.password === password) {
                var user = results;
                return done(null, user);
            } else {
                return done(null, false, {
                    message: 'Bad Password or Username'
                });
            }

        });

    }));
};
