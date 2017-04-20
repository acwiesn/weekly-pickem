'use strict';
module.exports = function (app, mongoose) {

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var entrySchema = Schema({
        Week: {type: String, required: true},
        User: {type: String, require: true},
        picks: {
            type: String,
            required: true,
            unique: true
        },
        lock: {
            type: String
        },
        created_at: Date,
        updated_at: Date
    });

    var Entry = mongoose.model('Entry', entrySchema);

}
