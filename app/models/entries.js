 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var entrySchema = new Schema({
        week: Number,
        user: {type: String},
        selections: 
        {
            game1: {
                pick: String,
                lock1: {
                    type: Boolean
                },
                points: Number
            },
            game2: {
                pick: String,
                lock2: {
                    type: Boolean
                },
                points: Number
            },
             game3: {
                pick: String,
                lock3: {
                    type: Boolean
                },
                points: Number
            },
            game4: {
                pick: String,
                lock4: {
                    type: Boolean
                },
                points: Number
            },
            game5: {
                pick: String,
                lock5: {
                    type: Boolean
                },
                points: Number
            },
            game6: {
                pick: String,
                lock6: {
                    type: Boolean
                },
                points: Number
            },
            game7: {
                pick: String,
                lock7: {
                    type: Boolean
                },
                points: Number
            },
            game8: {
                pick: String,
                lock8: {
                    type: Boolean
                },
                points: Number
            },
            game9: {
                pick: String,
                lock9: {
                    type: Boolean
                },
                points: Number
            },
            game10: {
                pick: String,
                lock10: {
                    type: Boolean
                },
                points: Number
            },
            game11: {
                pick: String,
                lock11: {
                    type: Boolean
                },
                points: Number
            },
            game12: {
                pick: String,
                lock12: {
                    type: Boolean
                },
                points: Number
            },
            game13: {
                pick: String,
                lock13: {
                    type: Boolean
                },
                points: Number
            },
            game14: {
                pick: String,
                lock14: {
                    type: Boolean
                },
                points: Number
            },    
            game15: {
                pick: String,
                lock15: {
                    type: Boolean
                },
                points: Number
            },
            game16: {
                pick: String,
                lock16: {
                    type: Boolean
                },
                points: Number
            },        
        },
        createdAt: Date,
        updatedAt: Date
    });

module.exports = mongoose.model('Entry', entrySchema);
