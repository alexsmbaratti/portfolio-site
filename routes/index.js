var express = require('express');
var router = express.Router();
var fs = require('fs');

let json = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
let experience = json['experience'];
let softwareProjects = json['software-projects'];
let diyProjects = json['diy-projects'];
let links = json['links'];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Alex Baratti',
        experience: experience,
        softwareProjects: softwareProjects,
        diyProjects: diyProjects,
        links: links
    });
});

router.get('/pixel-shelf', function (req, res, next) {
    res.render('pixel-shelf', {
        title: 'Pixel Shelf'
    });
});

router.get('/starbit', function (req, res, next) {
    res.render('starbit', {
        title: 'Starbit'
    });
});

router.get('/rosalina-bot', function (req, res, next) {
    res.render('rosalina-bot', {
        title: 'RosalinaBot'
    });
});

router.get('/akihabara-simulation', function (req, res, next) {
    res.statusCode = 503;
    res.render('under-construction', {
        title: 'Akihabara Simulation'
    });
});


router.get('/robin-amiibo', function (req, res, next) {
    res.statusCode = 503;
    res.render('under-construction', {
        title: 'Robin Player 2 amiibo'
    });
});

router.get('/starbits-coffee', function (req, res, next) {
    res.statusCode = 503;
    res.render('under-construction', {
        title: 'Starbits Coffee Mug'
    });
});

router.get('/amiibo-display', function (req, res, next) {
    res.statusCode = 503;
    res.render('under-construction', {
        title: 'amiibo Display'
    });
});

router.get('/portfolio-site', function (req, res, next) {
    res.render('portfolio-site', {
        title: 'Portfolio Site'
    });
});

module.exports = router;
