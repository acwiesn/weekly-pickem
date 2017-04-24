 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var entrySchema = new Schema({
        week: Number,
        user: {type: String},
        picks: {
            game1: {
            type: String
            },
            game2: {
            type: String
            },
            game3: {
            type: String
            }
        },
        lock: {
            type: String
        },
        created_at: Date,
        updated_at: Date
    });

module.exports = mongoose.model('Entry', entrySchema);
