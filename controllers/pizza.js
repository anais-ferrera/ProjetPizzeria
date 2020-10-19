
function createPizza(req, res) {
    console.log(req.body);
    let Todo = require('../models/pizza');
    let newPizza = C ({
        num_pizza: req.body.num_pizza,
        nom_pizza : req.body.nom_pizza,
        description : req.body.description,
        prix : req.body.prix,
    });
  
    newPizza.save()
    .then((savedPizza) => {

        //send back the created Pizza
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readPizza(req, res) {

    let Todo = require("../models/pizza");

    Todo.find({})
    .then((pizza) => {
        res.status(200).json(pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readPizzas(req, res) {

    let Todo = require("../models/pizza");

    Todo.findById({_id : req.params.id})
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }


function deletePizza(req, res) {

    let Todo = require("../models/pizza");

    Todo.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza ;


