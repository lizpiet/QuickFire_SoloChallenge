var fs = require('fs');
var express = require('express');
var router = express.Router();
var students = require('../models/students');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {student:students});
});

var absPath = path.join(__dirname, '../models/students.json');

router.post('/', function(req, res, next) {
  var studentsArray = students;
  studentsArray.push({firstName:req.body.firstName , lastName:req.body.lastName});

  fs.writeFile(absPath, JSON.stringify(studentsArray), function(err){
    if (err){
      console.log(err);
      res.sendStatus(200).send(err);
    } else {
      res.json(studentsArray);
    }
  });

});

module.exports = router;

