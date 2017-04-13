'use strict';
var password = require('password-hash-and-salt');

function hashpass(pass, cb) {
    // Creating hash and salt 
    password(pass).hash(function (error, hash) {
        if (error)
            throw new Error('Something went wrong when hashing passowrd!');
        //Return hashed password
       cb(hash);
    });
}

// Verifying a hash, pass in password and the hashed password retrived from db
function verifypass(pass,hash,cb){
    password(pass).verifyAgainst(hash, function(error, verified) {
        if(error)
            throw new Error('Something went wrong while verifying!');
        if(!verified) {
            console.log('Wrong Password');
            cb(false);
        } else {
            console.log('Right Password');
            cb(true);
        }
    });
}

module.exports = {
    verifypass,
    hashpass
};