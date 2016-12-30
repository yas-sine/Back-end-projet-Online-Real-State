var Immobilier = require('../models/immobilier');
var express = require('express');
var router = express.Router();

//**********************GET*****************************
router.route('/immobiliers').get(function(req, res) {
    Immobilier.find(function(err, immobiliers) {
        if (err) {
            return res.send(err);
        }   

        res.json(immobiliers);
    });
});

//**********************POST*****************************
router.route('/immobiliers').post(function(req, res) {
    var immobilier = new Immobilier(req.body);

    immobilier.save(function(err) {
        if (err) {
            return res.send(err);
        }

        res.send({ message: 'Immobilier added' });
    });
});

//**********************PUT*****************************
router.route('/immobiliers/:id').put(function(req,res){
    Immobilier.findOne({ _id: req.params.id }, function(err, immobilier) {
        if (err) {
            return res.send(err);
        }

        for (prop in req.body) {
            immobilier[prop] = req.body[prop];
        }

        // save the immobilier
        immobilier.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Immobilier updated!' });
        });
    });
});
//**********************RETRIEVING*****************************
router.route('/immobiliers/:id').get(function(req, res) {
    Immobilier.findOne({ _id: req.params.id}, function(err, immobilier) {
        if (err) {
            return res.send(err);
        }

        res.json(immobilier);
    });
});

//**********************DELETING*****************************
router.route('/immobiliers/:id').delete(function(req, res) {
    Immobilier.remove({
        _id: req.params.id
    }, function(err, immobilier) {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
});


module.exports = router;