    var mongoose = require('mongoose');
    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            admin: Boolean
        }
    });
    module.exports = mongoose.model('User', userSchema);
