var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.statusCode = 503;
    res.render('under-construction', {
        title: 'Happy Key'
    });
});

module.exports = router;