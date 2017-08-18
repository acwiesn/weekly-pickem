'use strict';
var mongoose = require('mongoose');
var Entry = require('../models/entries.js');
var Schedule = require('../models/games.js');

module.exports = {
  getCurrentWeek: function(){
      console.log('inside get current week');
      Schedule.find({current: true}, (err, data)=> {
          console.log(data[0].week);
          return data[0].week; 
        });
  }
};
