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
                }
            },
            game2: {
                pick: String,
                lock2: {
                    type: Boolean
                }
            },
             game3: {
                pick: String,
                lock3: {
                    type: Boolean
                }
            },
            game4: {
                pick: String,
                lock4: {
                    type: Boolean
                }
            },
            game5: {
                pick: String,
                lock5: {
                    type: Boolean
                }
            },
            game6: {
                pick: String,
                lock6: {
                    type: Boolean
                }
            },
            game7: {
                pick: String,
                lock7: {
                    type: Boolean
                }
            },
            game8: {
                pick: String,
                lock8: {
                    type: Boolean
                }
            },
            game9: {
                pick: String,
                lock9: {
                    type: Boolean
                }
            },
            game10: {
                pick: String,
                lock10: {
                    type: Boolean
                }
            },
            game11: {
                pick: String,
                lock11: {
                    type: Boolean
                }
            },
            game12: {
                pick: String,
                lock12: {
                    type: Boolean
                }
            },
            game13: {
                pick: String,
                lock13: {
                    type: Boolean
                }
            },
            game14: {
                pick: String,
                lock14: {
                    type: Boolean
                }
            },    
            game15: {
                pick: String,
                lock15: {
                    type: Boolean
                }
            },
            game16: {
                pick: String,
                lock16: {
                    type: Boolean
                }
            },        
        },
        createdAt: Date,
        updatedAt: Date
    });

module.exports = mongoose.model('Entry', entrySchema);
