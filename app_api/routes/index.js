const express = require("express");
const router = express.Router();

const animalsController = require("../controllers/animals");

router
    .route("/animals")
    .get(animalsController.animalsList)
    .post(animalsController.animalsAddAnimal);

// Get Method routes 
router
    .route('/animals/:animalCode')
    .get(animalsController.animalsFindByCode)
    .put(animalsController.animalsUpdateAnimal);
    
module.exports = router;