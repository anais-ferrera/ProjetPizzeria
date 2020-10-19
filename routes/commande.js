//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/commande');

//CREATE
router.post("/commande", (req, res) => {

    controller.create(req, res);
    res.json({"msg": "Create a Pizza"});

});

//READ
router.get("/commandes", (req, res) => {
    
    controller.reads(req, res);
    res.json({"msg": "Read a Pizza"});

});

router.get("/commande/:id", (req, res) => {
    
    controller.read(req, res);

});


//DELETE
router.delete("/commande/:id", (req, res) => {
    
    controller.delete(req, res);

});


module.exports = router;