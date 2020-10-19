//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/pizza');

//CREATE
router.post("/pizza", (req, res) => {

    controller.create(req, res);
    res.json({"msg": "Create a pizza"});

});

//READ
router.get("/pizzas", (req, res) => {
    
    controller.reads(req, res);
    res.json({"msg": "Read all the pizzas"});

});

router.get("/pizza/:id", (req, res) => {
    
    controller.read(req, res);
    res.json({"msg":"Read a pizza"});

});

//UPDATE
router.put("/pizza/:id", (req, res) => {
    
    controller.update(req, res);
    res.json({"msg": "Update a pizza"});

});

//DELETE
router.delete("/pizza/:id", (req, res) => {
    
    controller.delete(req, res);
    res.json({"msg": "Delete a pizza"});

});



module.exports = router;