    var mongoose = require('mongoose');
    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var UserSchema = Schema({
        username: { type: String, required: true, unique : true },
        password: { type: String }
    });
    module.exports = mongoose.model('User', UserSchema);
