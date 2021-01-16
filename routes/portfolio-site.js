var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('portfolio-site', {
        title: 'Portfolio Site'
    });
});

module.exports = router;
