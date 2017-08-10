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
        // console.log(req.body);
        var newSchedule = {
            current: true,
            week: req.body.week,
            schedule: {
                game1: {
                    gameTime: req.body.game1.gameTime,
                    day: req.body.game1.day,
                    homeTeam: req.body.game1.homeTeam, 
                    awayTeam: req.body.game1.awayTeam,
                    homeScore: req.body.game1.homeScore,
                    awayScore: req.body.game1.awayScore,
                    homeSpread: req.body.game1.homeSpread,
                    awaySpread: req.body.game1.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                 game2: {
                    gameTime: req.body.game2.gameTime,
                    day: req.body.game2.day,
                    homeTeam: req.body.game2.homeTeam, 
                    awayTeam: req.body.game2.awayTeam,
                    homeScore: req.body.game2.homeScore,
                    awayScore: req.body.game2.awayScore,
                    homeSpread: req.body.game2.homeSpread,
                    awaySpread: req.body.game2.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                 game3: {
                    gameTime: req.body.game3.gameTime,
                    day: req.body.game3.day,
                    homeTeam: req.body.game3.homeTeam, 
                    awayTeam: req.body.game3.awayTeam,
                    homeScore: req.body.game3.homeScore,
                    awayScore: req.body.game3.awayScore,
                    homeSpread: req.body.game3.homeSpread,
                    awaySpread: req.body.game3.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                 game4: {
                    gameTime: req.body.game4.gameTime,
                    day: req.body.game4.day,
                    homeTeam: req.body.game4.homeTeam, 
                    awayTeam: req.body.game4.awayTeam,
                    homeScore: req.body.game4.homeScore,
                    awayScore: req.body.game4.awayScore,
                    homeSpread: req.body.game4.homeSpread,
                    awaySpread: req.body.game4.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game5: {
                    gameTime: req.body.game5.gameTime,
                    day: req.body.game5.day,
                    homeTeam: req.body.game5.homeTeam, 
                    awayTeam: req.body.game5.awayTeam,
                    homeScore: req.body.game5.homeScore,
                    awayScore: req.body.game5.awayScore,
                    homeSpread: req.body.game5.homeSpread,
                    awaySpread: req.body.game5.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game6: {
                    gameTime: req.body.game6.gameTime,
                    day: req.body.game6.day,
                    homeTeam: req.body.game6.homeTeam, 
                    awayTeam: req.body.game6.awayTeam,
                    homeScore: req.body.game6.homeScore,
                    awayScore: req.body.game6.awayScore,
                    homeSpread: req.body.game6.homeSpread,
                    awaySpread: req.body.game6.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game7: {
                    gameTime: req.body.game7.gameTime,
                    day: req.body.game7.day,
                    homeTeam: req.body.game7.homeTeam, 
                    awayTeam: req.body.game7.awayTeam,
                    homeScore: req.body.game7.homeScore,
                    awayScore: req.body.game7.awayScore,
                    homeSpread: req.body.game7.homeSpread,
                    awaySpread: req.body.game7.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game8: {
                    gameTime: req.body.game8.gameTime,
                    day: req.body.game8.day,
                    homeTeam: req.body.game8.homeTeam, 
                    awayTeam: req.body.game8.awayTeam,
                    homeScore: req.body.game8.homeScore,
                    awayScore: req.body.game8.awayScore,
                    homeSpread: req.body.game8.homeSpread,
                    awaySpread: req.body.game8.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game9: {
                    gameTime: req.body.game9.gameTime,
                    day: req.body.game9.day,
                    homeTeam: req.body.game9.homeTeam, 
                    awayTeam: req.body.game9.awayTeam,
                    homeScore: req.body.game9.homeScore,
                    awayScore: req.body.game9.awayScore,
                    homeSpread: req.body.game9.homeSpread,
                    awaySpread: req.body.game9.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game10: {
                    gameTime: req.body.game10.gameTime,
                    day: req.body.game10.day,
                    homeTeam: req.body.game10.homeTeam, 
                    awayTeam: req.body.game10.awayTeam,
                    homeScore: req.body.game10.homeScore,
                    awayScore: req.body.game10.awayScore,
                    homeSpread: req.body.game10.homeSpread,
                    awaySpread: req.body.game10.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game11: {
                    gameTime: req.body.game11.gameTime,
                    day: req.body.game11.day,
                    homeTeam: req.body.game11.homeTeam, 
                    awayTeam: req.body.game11.awayTeam,
                    homeScore: req.body.game11.homeScore,
                    awayScore: req.body.game11.awayScore,
                    homeSpread: req.body.game11.homeSpread,
                    awaySpread: req.body.game12.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game12: {
                    gameTime: req.body.game12.gameTime,
                    day: req.body.game12.day,
                    homeTeam: req.body.game12.homeTeam, 
                    awayTeam: req.body.game12.awayTeam,
                    homeScore: req.body.game12.homeScore,
                    awayScore: req.body.game12.awayScore,
                    homeSpread: req.body.game12.homeSpread,
                    awaySpread: req.body.game12.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game13: {
                    gameTime: req.body.game13.gameTime,
                    day: req.body.game13.day,
                    homeTeam: req.body.game13.homeTeam, 
                    awayTeam: req.body.game13.awayTeam,
                    homeScore: req.body.game13.homeScore,
                    awayScore: req.body.game13.awayScore,
                    homeSpread: req.body.game13.homeSpread,
                    awaySpread: req.body.game13.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game14: {
                    gameTime: req.body.game14.gameTime,
                    day: req.body.game14.day,
                    homeTeam: req.body.game14.homeTeam, 
                    awayTeam: req.body.game14.awayTeam,
                    homeScore: req.body.game14.homeScore,
                    awayScore: req.body.game14.awayScore,
                    homeSpread: req.body.game14.homeSpread,
                    awaySpread: req.body.game14.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game15: {
                    gameTime: req.body.game15.gameTime,
                    day: req.body.game15.day,
                    homeTeam: req.body.game15.homeTeam, 
                    awayTeam: req.body.game15.awayTeam,
                    homeScore: req.body.game15.homeScore,
                    awayScore: req.body.game15.awayScore,
                    homeSpread: req.body.game15.homeSpread,
                    awaySpread: req.body.game15.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                game16: {
                    gameTime: req.body.game16.gameTime,
                    day: req.body.game16.day,
                    homeTeam: req.body.game16.homeTeam, 
                    awayTeam: req.body.game16.awayTeam,
                    homeScore: req.body.game16.homeScore,
                    awayScore: req.body.game16.awayScore,
                    homeSpread: req.body.game16.homeSpread,
                    awaySpread: req.body.game16.awaySpread,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
                 
            }
                              
            }
    
 var current = req.params.current
       Schedule.findOneAndUpdate({current: 'true'}, {$set: {current: 'false'}}, {'multi': true}, (err, current)=> {
         console.log(current);
            });
var newschedule = new Schedule(newSchedule);
        newschedule.save((err, schedule, numRows) => {
            if (err || numRows === 0) {
                console.log(err + numRows );
            } else {
                // console.log(schedule);
                res.send('Schedule has been submitted');
                
            }
        }); 
    });

router.post('/updateScores', requireLogin, (req, res) => {
        // console.log(req.body);
    Schedule.find({}, function(err, s) {
        if (err) {
            console.log('Could not find schedule');
        } else {
            // do your updates here
            s.week = req.params.week

            s.save(function(err) {
              if (err)
                console.log('error')
              else
                console.log('success')
            });
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
     // var weekSchedule = require( "../config/scheduleWeek1.json" )
        if(req.session.flash){
        }
         Schedule.find({current: 'true'}, (err, weeklySchedule) => {
            if (err){
                console.log(err);
                res.send(500, {
                    message: 'Failed to retrieve weekly schedule'
                });
            }
            
              res.render('pickform', {user:req.user, weeklySchedule:weeklySchedule[0]});
        });
    });
 router.get('/weeklystandings',requireLogin, (req, res, next)=>{
        var overall = require( "../config/standings.json" )
        if(req.session.flash){
        }
        res.render('weeklystandings', {overall:overall});
    });

router.get('/week/:week',requireLogin, (req, res, next)=>{
        
        var week = req.params.week
    
        var weekSchedule = require( "../config/scheduleWeek"+week+".json" );
        if(req.session.flash){
        }
        //res.send(weekSchedule);
         res.render('schedule', {weekSchedule:weekSchedule, user:req.user});
    });

router.get('/schedule',requireLogin, (req, res, next)=>{
        if(req.session.flash){
        }
        res.render('schedule', {user:req.user});
    });

router.get('/gameschedule',requireLogin, (req, res, next)=>{
        if(req.session.flash){
        }
    Schedule.find({current: 'true'}, (err, weeklySchedule)=>{
        if (err){
                console.log(err);
                res.send(500, {
                    message: 'Failed to retrieve weekly schedule'
                });
    }
         res.render('gameschedule', {user:req.user, weeklySchedule:weeklySchedule[0]});
    });
});

module.exports = router;