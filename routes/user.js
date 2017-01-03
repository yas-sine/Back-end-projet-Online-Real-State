var User = require('../models/user');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jwt-simple');
var config = require('../config/database');


router.post('/signup', function(req, res) {
    if (!req.body.nom || !req.body.password) {
        res.json({success: false, msg: 'Please pass name and password.'});
    } else {
        var newUser = new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: req.body.password
        });
        // save the user
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
});

router.post('/authenticate', function(req, res) {
    User.findOne({
        nom: req.body.nom
    }, function(err, user) {
        if (err)
            res.send(err);

        if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    // return the information including token as JSON
                    res.json({success: true, username:user.nom, token: 'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

/*
router.get('/memberinfo', passport.authenticate('jwt'), function(req, res) {
        res.send(req.user);
        var token = getToken(req.headers);
        if (token) {
            var decoded = jwt.decode(token, config.secret);
            User.findOne({
                nom: decoded.nom
            }, function(err, user) {
                if (err) throw err;

                if (!user) {
                    return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
                } else {
                    res.json({success: true, msg: 'Welcome in the member area ' + user.nom + '!'});
                }
            });
        } else {
            return res.status(403).send({success: false, msg: 'No token provided.'});
        }

});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
*/



module.exports = router;