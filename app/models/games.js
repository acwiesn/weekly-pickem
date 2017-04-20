 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var gameSchema = new Schema({
    
            week: Number,            
            gameTime: Date,
            title: {type: String, unique: true},
            homeTeam: String,
            awayTeam: String,
            homeScore: Number,
            awayScore: Number,
            homeSpread: Number,
            awaySpread: Number,
            created_at: Date,
            updated_at: Date
            
    });

module.exports = mongoose.model('Game', gameSchema);