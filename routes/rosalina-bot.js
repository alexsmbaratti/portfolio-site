var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    var json = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    var experience = json['experience']
    var softwareProjects = json['software-projects']
    var diyProjects = json['diy-projects']
    var links = json['links']

    res.render('rosalina-bot', {
        title: 'RosalinaBot',
        experience: experience,
        softwareProjects: softwareProjects,
        diyProjects: diyProjects,
        links: links
    });
});

module.exports = router;
