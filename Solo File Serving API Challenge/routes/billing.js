var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET billing listing. */
router.get('/:id?', function(req, res, next) {

    var id = req.params.id;

    var file = path.join(__dirname, '../models/billing.json');
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        } else {
            var obj = JSON.parse(data);
            var billing = null; // if no billing address is found, return null

            obj.forEach(function(elem){
                if(elem.customerId == id){ // Finds the shipping address by customer id
                    billing = elem;
                }
            });

            res.json(billing);
        }
    })
});

module.exports = router;
