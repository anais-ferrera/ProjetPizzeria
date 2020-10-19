var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  title : String,
  description : String,
  prix : Number, 
  id : Number,
  done : {
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Pizza', PizzaSchema);