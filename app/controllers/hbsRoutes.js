'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = require('../models/entries.js');
var requireLogin = require('./requireLogin');
var Schedule = require('../models/games.js');
var c =  require('../lib/calculations.js');
var service = require('../lib/services.js')
//var script = require('../lib/test.js');

//Organizied signup and login routes passing app and function to requireLogin

router.post('/entrySubmit', requireLogin, (req, res) => {
    var date = new Date();
    var newEntry = {
        user: req.body.user,
        week: req.body.week,
        selections: {
            game1: {
                pick: req.body.game1,
                lock: req.body.selections.game1.lock
            },
            game2: {
                pick: req.body.game2,
                lock: req.body.selections.game2.lock
            },
            game3: {
                pick: req.body.game3,
                lock: req.body.selections.game3.lock
            },
            game4: {
                pick: req.body.game4,
                lock: req.body.selections.game4.lock
            },
            game5: {
                pick: req.body.game5,
                lock: req.body.selections.game5.lock
            },
            game6: {
                pick: req.body.game6,
                lock: req.body.selections.game6.lock
            },
            game7: {
                pick: req.body.game7,
                lock: req.body.selections.game7.lock
            },
            game8: {
                pick: req.body.game8,
                lock: req.body.selections.game8.lock
            },
            game9: {
                pick: req.body.game9,
                lock: req.body.selections.game9.lock
            },
            game10: {
                pick: req.body.game10,
                lock: req.body.selections.game10.lock
            },
            game11: {
                pick: req.body.game11,
                lock: req.body.selections.game11.lock
            },
            game12: {
                pick: req.body.game12,
                lock: req.body.selections.game12.lock
            },
            game13: {
                pick: req.body.game13,
                lock: req.body.selections.game13.lock
            },
            game14: {
                pick: req.body.game14,
                lock: req.body.selections.game14.lock
            },
            game15: {
                pick: req.body.game15,
                lock: req.body.selections.game15.lock
            },
            game16: {
                pick: req.body.game16,
                lock: req.body.selections.game16.lock
            },
            createdAt: date,
            updatedAt: date
        }
    };

    Entry.findOneAndUpdate({user: req.body.user, week: req.body.week}, newEntry, {upsert: true}, (err, entry, numRows) => {
        if (err || numRows === 0) {
            console.log(err + numRows);
        } else {
            console.log(entry);
            res.send('Entry has been submitted');
        }
    });
});

router.get('/setWeeklyPoints', requireLogin, (req, res, next)=> {

    var user = req.user.username
    service.getCurrentWeek(function (err,result) {
        console.log('Week: '+result);
    Entry.find({week:result}, (err, entries)=> {
        if (err) {
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve entries'
            });
        }
            console.log(entries);
    Schedule.find({week: result}, (err, games)=>{
            
        var entriesLength = entries.length
        for (var j = 0; j < entriesLength; j++){
            var totalPoints=0;
            for (var i = 1; i <= 16; i++) {
                
                var game = 'game' + i;
                         var points = c.checkWinner(entries[j].selections[game], games[0].schedule[game]);
                console.log(entries[j].selections[game]+" *****\n");
                console.log(points);
                totalPoints+=points;
                entries[j].selections[game].points=points;
            }
            entries[j].totalPoints=totalPoints;
            Entry.findOneAndUpdate({user: entries[j].user, week:result}, entries[j], {upsert: true}, (err, entry)=>{
                if(err){
                    console.log(err);
                } 
                console.log(entry);
                console.log('Entry Saved');

            })
        }
        var results = 'Your Total Score for this entry:'+totalPoints;
        
        
        /*TODO:
        Save and update enty with points, and totals etc...*/
        res.send(results);
    })        
       
    });  
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