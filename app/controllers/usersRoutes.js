'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users.js');

router.get('/api/users', (req, res) => {

    User.find({},{password:0,__v:0},(err, users) => {
        if(err){
            console.log(err);
            res.send(500, {message: 'Failed to retrive users'});
        }
        res.status(200);
        res.json(users);

  });


router.get('/api/usersMaped', (req, res) => {

    User.find({}, (err, users) => {
        if (err) {
            console.log(err);
            res.send(500, {
                message: 'Failed to retrive usersMaped'
            });
        }
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });
        res.status(200);
        res.send(userMap);

    });

});
router.get('/users/:id', (req, res) => {
    var id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400);
            res.send({
                    message: 'Bad request invalid id: ' +id
                });
    } else {
        User.findById(id,{password:0,__v:0},(err, user)=>{
            if (err) {
                console.log(err);
                res.send(500, {
                    message: 'Failed to retrive user with id: ' + id
                });
            }
            res.status(200);
            res.send(user);
        });
    }

});
router.get('/users/:username/user', (req, res) => {
    var username = req.params.username;

        User.findOne({username:username},{password:0,__v:0},(err, user)=>{
            if (err) {
                console.log(err);
                res.send(500, {
                    message: 'Failed to retrive user with username: ' + username
                });
            }
            res.status(200);
            res.send(user);
        });
});



});

module.exports = router;
