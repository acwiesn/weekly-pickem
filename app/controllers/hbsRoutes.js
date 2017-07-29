'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = require('../models/entries.js');
var requireLogin = require('./requireLogin');
var Schedule = require('../models/games.js');

    //Organizied signup and login routes passing app and function to requireLogin
    router.post('/entrySubmit', requireLogin, (req, res) => {
        console.log(req.body);
        var newEntry = {
            user: req.body.user,
            week: req.body.week,
            selections: 
            {
            game1: {
                pick: req.body.game1,
                lock1: req.body.lock1
                    },
            game2: {
                   pick: req.body.game2,
                   lock2: req.body.lock2
                    },
            game3: {
                   pick: req.body.game3,
                   lock3: req.body.lock3
                    },
            game4: {
                   pick: req.body.game4,
                   lock4: req.body.lock4
                    },
            game5: {
                   pick: req.body.game5,
                   lock5: req.body.lock5
                    },
            game6: {
                   pick: req.body.game6,
                   lock6: req.body.lock6
                    },
            game7: {
                   pick: req.body.game7,
                   lock7: req.body.lock7
                    },
            game8: {
                   pick: req.body.game8,
                   lock8: req.body.lock8
                    },
            game9: {
                   pick: req.body.game9,
                   lock9: req.body.lock9
                    },
            game10: {
                   pick: req.body.game10,
                   lock10: req.body.lock10
                    },
            game11: {
                   pick: req.body.game11,
                   lock11: req.body.lock11
                    },
            game12: {
                   pick: req.body.game12,
                   lock12: req.body.lock12
                    },
            game13: {
                   pick: req.body.game13,
                   lock13: req.body.lock13
                    },
            game14: {
                   pick: req.body.game14,
                   lock14: req.body.lock14
                    },
            game15: {
                   pick: req.body.game15,
                   lock15: req.body.lock15
                    },
            game16: {
                   pick: req.body.game16,
                   lock16: req.body.lock16
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


router.post('/scheduleSubmit', requireLogin, (req, res) => {
        console.log(req.body);
        var newSchedule = {
            week: req.body.week,
            schedule: {
                gameTime: req.body.gameTime,
                day: req.body.day,
                homeTeam: req.body.homeTeam, 
                awayTeam: req.body.awayTeam,
                homeScore: req.body.homeScore,
                awayScore: req.body.awayScore,
                homeSpread: req.body.homeSpread,
                awaySpread: req.body.awaySpread,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        };
        var newschedule = new Schedule(newSchedule);
        newschedule.save((err, schedule, numRows) => {
            if (err || numRows === 0) {
                console.log(err + numRows );
            } else {
                console.log(schedule);
                res.send('Schedule has been submitted');
            }
        });
 });

    router.get('/standings', requireLogin, (req, res, next)=>{
        var overall = require( "../config/standings.json" )
        if(req.session.flash){
        }
        res.render('standings', {overall:overall});
    });

 router.get('/pickform',requireLogin, (req, res, next)=>{  
     var weekSchedule = require( "../config/scheduleWeek1.json" )
     var example = require( "../config/example.json" )
        if(req.session.flash){
        }
        res.render('pickform', {weekSchedule:weekSchedule, user:req.user, example:example});
    });
 router.get('/weeklystandings',requireLogin, (req, res, next)=>{
        var overall = require( "../config/standings.json" )
        if(req.session.flash){
        }
        res.render('weeklystandings', {overall:overall});
    });
router.get('/schedule',requireLogin, (req, res, next)=>{
        var teams = require( "../config/teams.json" )
        var games = require( "../config/scheduleWeek1.json" )
        if(req.session.flash){
        }
        res.render('schedule', {teams:teams, games:games, user:req.user});
    });

module.exports = router;