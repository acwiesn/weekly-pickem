'use strict';
var mongoose = require('mongoose');
var Entry = require('../models/entries.js');
var Schedule = require('../models/games.js');
mongoose.set('debug', true);
module.exports = {
    getCurrentWeek: function (callback) {
        console.log('inside get current week number');
        Schedule.find({
            current: true
        }, (err, data) => {
            console.log('inside find current week');
            callback(err, data[0].week);
        });
    },
    getWeeklyTotals: function (callback) {
        Entry.find({}, (err, data) => {
            var x = {};
            for(var i = 0;<data.length;i++){
                
                x = {data[i].user:}
            }
            callback(err, x);
        });
    }
};