'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = require('../models/entries.js');
var requireLogin = require('./requireLogin');
var Schedule = require('../models/games.js');
var c =  require('../lib/calculations.js');


//Organizied signup and login routes passing app and function to requireLogin

router.post('/entrySubmit', requireLogin, (req, res) => {
    console.log(req.body);
    var newEntry = {
        user: req.body.user,
        week: req.body.week,
        selections: {
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
            console.log(err + numRows);
        } else {
            console.log(entry);
            res.send('Entry has been submitted');
        }
    });

});

router.post('/populateScheduleDB', requireLogin, (req, res, next)=> {
    var games = {};
    for (var i = 1; i <= 16; i++) {

        var game = 'game' + i;
        // console.log(game);
        games[game] = {
            gameTime: req.body[game].gameTime,
            day: req.body[game].day,
            homeTeam: req.body[game].homeTeam,
            awayTeam: req.body[game].awayTeam,
            homeScore: req.body[game].homeScore,
            awayScore: req.body[game].awayScore,
            homeSpread: req.body[game].homeSpread,
            awaySpread: req.body[game].awaySpread,
            createdAt: new Date(),
            updatedAt: new Date(),
            winner: null
        }
    }
    
    var newSchedule = {
        current: false,
        week: req.body.week,
        schedule: games
    }
    Schedule.findOneAndUpdate({
        week: req.body.week
        }, newSchedule, {
            upsert: true
        }, (err, schedule, numRows) => {
            console.log('inside newschedule findandupdateorcreate');
            if (err || numRows === 0) {
                console.log(err + numRows);
            } else {
            
                res.send('Schedule has been submitted' + schedule);
                
            }
        });
});

router.post('/scheduleSubmit', requireLogin, (req, res, next) => {

    var games = {};
    for (var i = 1; i <= 16; i++) {

        var game = 'game' + i;
        console.log(game);
        if (req.body[game].homeScore!==null && req.body[game].awayeScore!==null){
           
            var winner = c.calculateSpread(req.body[game]);
             console.log(winner);
        } else {
            var winner = null
        }
        games[game] = {
            gameTime: req.body[game].gameTime,
            day: req.body[game].day,
            homeTeam: req.body[game].homeTeam,
            awayTeam: req.body[game].awayTeam,
            homeScore: req.body[game].homeScore,
            awayScore: req.body[game].awayScore,
            homeSpread: req.body[game].homeSpread,
            awaySpread: req.body[game].awaySpread,
            createdAt: new Date(),
            updatedAt: new Date(),
            winner: winner
        }
    }
    
    var newSchedule = {
        current: true,
        week: req.body.week,
        schedule: games
    }
    Schedule.findOneAndUpdate({
        current: 'true'
    }, {
        $set: {
            current: 'false'
        }
    }, (err, current) => {
        console.log('inside find and update');
        //var newschedule = new Schedule(newSchedule);
        Schedule.findOneAndUpdate({
            week: req.body.week
        }, newSchedule, {
            upsert: true
        }, (err, schedule, numRows) => {
            console.log('inside newschedule findandupdateorcreate');
            if (err || numRows === 0) {
                console.log(err + numRows);
            } else {
                
                // console.log(schedule);
                res.send('Schedule has been submitted' + schedule);
                
            }
        });

    });
});

router.get('/standings', requireLogin, (req, res, next) => {
    var overall = require("../config/standings.json")
    if (req.session.flash) {}
    res.render('standings', {
        overall: overall
    });
});

router.get('/pickform', requireLogin, (req, res, next) => {
    // var weekSchedule = require( "../config/scheduleWeek1.json" )
    if (req.session.flash) {}
    Schedule.find({
        current: 'true'
    }, (err, weeklySchedule) => {
        if (err) {
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve weekly schedule'
            });
        }
        res.render('pickform', {
            user: req.user,
            weeklySchedule: weeklySchedule[0]
        });
    });
});
router.get('/weeklystandings', requireLogin, (req, res, next) => {
    var overall = require("../config/standings.json")
    if (req.session.flash) {}
    res.render('weeklystandings', {
        overall: overall
    });
});

router.get('/week/:week', requireLogin, (req, res, next) => {

    var week = req.params.week

    //var weekSchedule = require("../config/scheduleWeek" + week + ".json");
    Schedule.findOne({
        'week': week
    }, (err, weekschedule) => {
        if (err) {
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve weekly schedule'
            });
        }
// console.log(weekschedule.schedule);
        res.render('schedule', {
            weekSchedule: weekschedule,
            user: req.user
        });
    });
});


router.get('/schedule', requireLogin, (req, res, next) => {
    if (req.session.flash) {}
    res.render('schedule', {
        user: req.user
    });
});

router.get('/populateschedule', requireLogin, (req, res, next) => {
    if (req.session.flash) {}
    res.render('populateschedule', {
        user: req.user
    });
});

router.get('/populate/:schedule', requireLogin, (req, res, next) => {

    var schedule = req.params.schedule

    var weekSchedule = require("../config/scheduleWeek" + schedule + ".json");
    
    // console.log(weekSchedule);
        res.render('populateschedule', {
            weekSchedule: weekSchedule,
            user: req.user
        });
    });

router.get('/gameschedule', requireLogin, (req, res, next) => {
    if (req.session.flash) {}
    Schedule.find({
        current: 'true'
    }, (err, weeklySchedule) => {
        if (err) {
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve weekly schedule'
            });
        }
        res.render('gameschedule', {
            user: req.user,
            weeklySchedule: weeklySchedule[0]
        });
    });
});

module.exports = router;