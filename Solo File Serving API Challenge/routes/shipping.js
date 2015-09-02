var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET shipping listing. */
router.get('/:id?', function(req, res, next) {

    var id = req.params.id;

    var file = path.join(__dirname, '../models/shipping.json');
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        } else {
            var obj = JSON.parse(data);
            var shipping = null; // if no shipping is found, return null

            obj.forEach(function(elem){
                if(elem.customerId == id){ // Finds the shipping address by customer id
                    shipping = elem;
                }
            });

            res.json(shipping);
        }
    })
});

module.exports = router;
