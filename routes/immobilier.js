var Immobilier = require('../models/immobilier');
var express = require('express');
var router = express.Router();


router.route('/immobiliers').get(function(req, res) {
    Immobilier.find(function(err, immobiliers) {
        if (err) {
            return res.send(err);
        }   

        res.json(immobiliers);
    });
});



module.exports = router;