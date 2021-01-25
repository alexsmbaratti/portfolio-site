var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    let json = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    let experience = json['experience'];
    let softwareProjects = json['software-projects'];
    let diyProjects = json['diy-projects'];
    let links = json['links'];

    res.render('under-construction', {
        title: 'Alex Baratti',
        experience: experience,
        softwareProjects: softwareProjects,
        diyProjects: diyProjects,
        links: links
    });
});

module.exports = router;
