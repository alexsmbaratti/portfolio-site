var express = require('express');
var router = express.Router();
const axios = require('axios');
const url = require('../config.json').url;

/* GET home page. */
router.get('/', function (req, res, next) {
    axios({
        method: 'get',
        url: url + '/posts?filter[posts_per_page]=10'
    }).then(function (result) {
        console.log(result.data);
        res.render('blog', {
            title: 'Blog',
            posts: result.data
        });
    });
});

module.exports = router;
