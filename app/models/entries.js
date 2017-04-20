 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var entrySchema = new Schema({
        week: [ ],
        user: {type: String, required: true},
        picks: [{
            type: String,
            required: true,
        }],
        lock: {
            type: String
        },
        created_at: Date,
        updated_at: Date
    });

module.exports = mongoose.model('Entry', entrySchema);
