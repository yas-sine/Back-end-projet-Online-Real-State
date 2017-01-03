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
router.route('/immobiliers/:id').get(function(req, res) {
    Immobilier.findOne({ Id: req.params.id}, function(err, immobilier) {
        if (err) {
            return res.send(err);
        }

        res.json(immobilier);
    });
});
router.route('/immobilier/:Categorie').get(function(req, res) {
    Immobilier.find({ categorie: req.params.Categorie}, function(err, immobiliers) {
        if (err) {
            return res.send(err);
        }

        res.json(immobiliers);
    });
});

router.route('/immobil/:titre').get(function(req, res) {
    var query = req.query
    //res.send(query['name']);
    Immobilier.findOne(query['titre'], function(err, immobiliers) {
        if(!err && Immobilier) {
            res.json(200, immobiliers);
        } else if(err) {
            res.json(500, { message: "Error loading task." + err});
        } else {
            res.json(404, { message: "Task not found."});
        }
    });
    //res.end(JSON.stringify(query));
});

/*router.route('/immobiliers/:categorie').get(function(req, res) {
    Immobilier.find({categorie: req.params.categorie}, function (err, immobiliers) {
        if (err) {
            return console.error(err);
        }
        res.json(immobiliers);
    });
});*/




module.exports = router;