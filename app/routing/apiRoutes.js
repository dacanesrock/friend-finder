var path = require('path');
var express = require("express");
var friends = require('../data/friends.json');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.sendFile(path.join(__dirname, '../data/friends.json'));
    });

    app.post('/api/friends', function(req, res) {
    	friends.push(req.body);
    })
};
