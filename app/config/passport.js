'use strict';
var passport = require('passport');
var User = require('../models/users.js');
module.exports = function (app){
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser((user,done)=>{
        done(null, user._id);
    });
    
    passport.deserializeUser((user,done)=>{
         User.findById(user, function(err, user) {
             if(err){
                 console.log(err);
             }
            done(err, user);
          });
        
    });
    
    require('./strategies/local.strategy')();
};

