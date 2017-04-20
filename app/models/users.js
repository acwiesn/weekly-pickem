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
        },
        lastname: {
            type: String,
        },
        email: {
            type: String,
            admin: Boolean
        }
    });
    module.exports = mongoose.model('User', userSchema);
