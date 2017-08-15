 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var scheduleSchema = new Schema({
            
            current: Boolean,
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
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
                        updated_at: Date,
                        winner: String
                    }
            }
    });

module.exports = mongoose.model('Schedule', scheduleSchema);