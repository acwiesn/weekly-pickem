 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var gameSchema = new Schema({
    
            week: Number,
            schedule: {
                game1: 
                    {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game2: 
                {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game3:
                 {

                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game4:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game5:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game6:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game7:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game8:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game9:
                {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game10:
                {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game11:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game12:
                {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game13:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game14:
                {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game15:
                 {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    },
                game16:
                {
                        day: String,
                        gameTime: String,
                        homeTeam: String,
                        awayTeam: String,
                        homeScore: Number,
                        awayScore: Number,
                        homeSpread: Number,
                        awaySpread: Number,
                        created_at: Date,
                        updated_at: Date
                    }
            }
    });

module.exports = mongoose.model('Game', gameSchema);