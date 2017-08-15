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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
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
                        winnner: String
                    }
            }
    });

module.exports = mongoose.model('Schedule', scheduleSchema);