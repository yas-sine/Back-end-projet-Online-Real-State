var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var immobilierSchema = new Schema({
    Id: {type: String, unique: true,},
    titre: {type: String, maxlength: 50},
    description: String,
    categorie: String,
    price: Number,
    datedepos: Date,
    imagePath: String,
    ville: String
});

module.exports = mongoose.model('Immobilier', immobilierSchema);
