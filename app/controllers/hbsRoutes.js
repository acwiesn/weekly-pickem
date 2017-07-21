'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = require('../models/entries.js');
var requireLogin = require('./requireLogin')

    //Organizied signup and login routes passing app and function to requireLogin
    router.post('/entrySubmit', (req, res) => {
        console.log(req.body);
        var newEntry = {
            user: req.body.user,
            week: req.body.week,
            selections: 
            {
            game1: {
                pick: req.body.game1,
                lock: req.body.lock
                    },
            game2: {
                   pick: req.body.game2,
                   lock: req.body.lock
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
            createdAt: new Date(),
            updatedAt: new Date()
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
    router.get('/standings',requireLogin, (req, res, next)=>{
        var overall = require( "../config/standings.json" )
        if(req.session.flash){
        }
        res.render('standings', {overall:overall});
    });

 router.get('/pickform',requireLogin, (req, res, next)=>{  
     var games = require( "../config/games.json" )
        if(req.session.flash){
        }
        res.render('pickform', {games:games});
    });
 router.get('/weeklystandings',requireLogin, (req, res, next)=>{
        var overall = require( "../config/standings.json" )
        if(req.session.flash){
        }
        res.render('weeklystandings');
    });
router.get('/schedule',requireLogin, (req, res, next)=>{
        
        if(req.session.flash){
        }
        res.render('schedule');
    });

module.exports = router;