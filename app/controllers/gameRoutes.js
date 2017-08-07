
'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schedule = require('../models/games.js');

router.get('/games', (req, res, next)=> {
    var weekGames = req.params.weekGames
    
    Schedule.find({weekGames:weekGames}, (err, weeklySchedule)=>{
        if (err){
            console.log(err);
            res.send(500, {
                message: 'Failed to retrieve weekly schedule'
            });
        }
//        var gameMap = {};
//
//        games.forEach(function (game) {
//            gameMap[game.week] = game;
//        });
        res.send(weeklySchedule)
    })
});

module.exports = router;