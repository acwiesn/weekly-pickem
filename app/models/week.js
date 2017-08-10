 var mongoose = require('mongoose');

    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var weekSchema = new Schema({
            week: Number
    });

module.exports = mongoose.model('Week', weekSchema);