var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET kittehs listing. */
router.get('/:id?', function(req, res, next) {

    var id = req.params.id;

    var file = path.join(__dirname, '../models/kittehs.json');
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        } else {
            var obj = JSON.parse(data);
            var kitten = obj;

            obj.forEach(function(elem){
                if(elem.id == id){
                    kitten = elem;
                }
            });

            res.json(kitten);
        }
    })
});

module.exports = router;
