'use strict';
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/users.js');

module.exports = function () {

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true,
        },
        function (req, username, password, done) {
            process.nextTick(()=> {
                User.findOne({
                    username: username
                }, (err, user)=> {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already in use.'));
                    } else {
                        var newUser = new User();
                        newUser.username = username;
                        newUser.password = newUser.generateHash(password);
                        newUser.email = req.body.email;
                        newUser.firstname = req.body.firstname;
                        newUser.lastname = req.body.lastname;
                        newUser.save((err)=> {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));



    passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, username, password, done) => {

        User.findOne({
            username: username
        }, (err, results) => {
            if (err) {
                return done(err);
            }

            if (!results) {
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            } else if (results.validPassword(password)) {
                var user = results;
                return done(null, user);
            } else if (!results.validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'Wrong password.'));
            }



        });

    }));
};