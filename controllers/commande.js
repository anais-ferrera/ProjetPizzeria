function createCommande(req, res) {
    let Todo = require('../models/commande');
    let newCommande = C ({
        num_commande: req.body.num_commande,
        nom_client : req.body.nom_client,
        adrresse_livraison : req.body.adrresse_livraison,
    });
  

    newCommande.save()
    .then((savedCommande) => {

        //send back the created Commande
        res.json(savedCommande);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCommande(req, res) {

    let Todo = require("../models/commande");

    Todo.find({})
    .then((commande) => {
        res.status(200).json(commande);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCommandes(req, res) {

    let Todo = require("../models/commande");

    Todo.findById({_id : req.params.id})
    .then((commandes) => {
        res.status(200).json(commandes);
    }, (err) => {
        res.status(500).json(err);
    });
 }


function deleteCommande(req, res) {

    let Todo = require("../models/commande");

    Todo.findOneAndRemove({_id : req.params.id})
    .then((deletedTodo) => {
        res.status(200).json(deletedCommande);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createCommande;
module.exports.reads = readCommandes;
module.exports.read = readCommande;
module.exports.delete = deleteCommande ;



