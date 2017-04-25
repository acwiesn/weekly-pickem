var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
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
userSchema.methods.generateHash = function(password) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {  
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
