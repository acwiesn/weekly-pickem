
'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schedule = require('../models/games.js');

router.get('/games', (req, res, next)=> {
    // var weekGames = req.params.weekGames
     Schedule.find({}, (err, weeklySchedule) => {
        if (err){
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve weekly schedule'
            });
        }
         res.send(weeklySchedule)
    });
});


router.get('/games/week/:week', (req, res, next)=> {
    var week = req.params.week;
    console.log(week);
    Schedule.find({week: week}, {schedule: 'game1'}, (err, weekSchedule)=>{
        if (err){
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve weekly schedule'
            });
        }
        
        res.send(weekSchedule)
    });
});

module.exports = router;