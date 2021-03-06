var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  num_pizza: Number,
  nom_pizza : String,
  description : String,
  prix : Number,
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

module.exports = mongoose.model('Pizza', PizzaSchema);
