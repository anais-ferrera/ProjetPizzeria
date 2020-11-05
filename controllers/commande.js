function createCommande(req, res) {
    let Todo = require('../models/commande');
    let newCommande = Commande ({
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

function readCommandes(req, res) {

    let Commande = require("../models/commande");

    Todo.find({})
    .then((commandes) => {
        res.status(200).json(commandes);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCommande(req, res) {

    let Commande = require("../models/commande");

    Todo.findById({_id : req.params.id})
    .then((commande) => {
        res.status(200).json(commande);
    }, (err) => {
        res.status(500).json(err);
    });
 }


function deleteCommande(req, res) {

    let Commande = require("../models/commande");

    Todo.findOneAndRemove({_id : req.params.id})
    .then((deletedCommande) => {
        res.status(200).json(deletedCommande);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createCommande;
module.exports.reads = readCommandes;
module.exports.read = readCommande;
module.exports.delete = deleteCommande ;



