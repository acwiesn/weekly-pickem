'use strict';
var express = require('express');
var router = express.Router();


var users = {
    'Joe_1234': {
        'email': 'test@test.com',
        'firstName': 'Joe',
        'lastName': 'Will'
    }
};
// Car brands page
router.get('/users', (req, res) => {
    //res.json({'foo': 'bar'});


    res.json(users);
});

module.exports = router;
