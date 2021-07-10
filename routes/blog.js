var express = require('express');
var router = express.Router();
const axios = require('axios');
const url = require('../config.json').url;

const blogTitle = 'Alex\'s Ponderings';

/* GET home page. */
router.get('/', function (req, res, next) {
    axios({
        method: 'get',
        url: url + '/posts?filter[posts_per_page]=10'
    }).then(function (result) {
        console.log(result.data);
        res.render('blog', {
            title: blogTitle,
            posts: result.data
        });
    });
});

router.get('/:postSlug', function (req, res, next) {
    const postSlug = req.params.postSlug;
    axios({
        method: 'get',
        url: url + '/posts/?slug=' + encodeURI(postSlug)
    }).then(function (result) {
        console.log(result.data[0]);
        res.render('post', {
            title: 'Alex\'s Ponderings',
            post: result.data[0]
        });
    }).catch(err => {
        res.render('error', {
            message: 'Page not found!',
            error: err
        });
    });
});

module.exports = router;
