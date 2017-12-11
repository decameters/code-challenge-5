var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema');

router.get('/', function (req, res) {

    Message.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with message find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});

router.post('/', function (req, res) {
    var addMessage = new Message(req.body);
    addMessage.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with message save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;