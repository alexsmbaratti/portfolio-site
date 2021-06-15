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
            title: 'Alex\'s Ponderings',
            posts: result.data
        });
    });
});

router.get('/:postID', function (req, res, next) {
    const postID = req.params.postID;
    axios({
        method: 'get',
        url: url + '/posts/?filter[p]=' + postID
    }).then(function (result) {
        console.log(result.data[0]);
        res.render('post', {
            title: 'Alex\'s Ponderings',
            post: result.data[0]
        });
    });
});

module.exports = router;
