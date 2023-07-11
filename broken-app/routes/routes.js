const express = require('express');
const route = new express.Router();
const axios = require('axios');
const ExpressErrors = require('../expressErrors');

const BASE_URL = 'https://api.github.com/users/';

const results = [];
const userInfo = [];


route.post('/', function (req, res, next) {
    const users = req.body.developers;
    for (u of users) {
        results.push(
            axios.get(`https://api.github.com/users/${u}`).then(value => {
                return ({ name: value.data.name, bio: value.data.bio });
            })
        );
    }

    Promise.all(results).then(value => {
        return res.status(201).json({
            value,
        });
    });

});


module.exports = route;