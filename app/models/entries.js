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
                lock: {
                    type: Boolean
                }
            },
            game2: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
             game3: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game4: {
                pick: String,
                lock: {
                    type: Boolean
                }
            }
    /*        game5: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game6: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game7: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game8: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game9: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game10: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game11: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game12: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            game13: {
                pick: String,
                lock: {
                    type: Boolean
                }
            },
            */
            
        },
        created_at: Date,
        updated_at: Date
    });

module.exports = mongoose.model('Entry', entrySchema);
