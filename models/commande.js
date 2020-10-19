var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommandeSchema = new Schema({
  num_commande: Number,
  nom_client : String,
  adrresse_livraion : String,
  done : {
    type : Boolean,
    default : false
  },
  orderedAt : {
    type : Date,
    default : Date.now
  },

  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Commande', CommandeSchema);
