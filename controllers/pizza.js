function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        title: req.body.title,
        description : req.body.description,
        prix: req.body.prix,
        id: req.body.id
    });
  
    newPizza.save()
    .then((savedPizza) => {

        //send back the created Todo
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readPizzas(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.find({})
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readPizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findById({_id : req.params.id})
    .then((pizza) => {
        res.status(200).json(pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updatePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description,
        prix: req.body.prix,
        id: req.body.id}, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza;
module.exports.update = updatePizza;
module.exports.done = done;
module.exports.undone = undone;