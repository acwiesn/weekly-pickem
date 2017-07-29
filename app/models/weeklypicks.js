 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var weeklyStandingsSchema = new Schema({
            
            week: Number,
            user: String,            
            pick1: Number,
            pick2: Number,
            pick3: Number,
            pick4: Number,
            pick5: Number,
            pick6: Number,
            pick7: Number,
            pick8: Number,
            created_at: Date,
            updated_at: Date
            
    });

module.exports = mongoose.model('WeeklyStandings', gameSchema);