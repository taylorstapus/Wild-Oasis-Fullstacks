const express = require("express");
const router = express.Router();

const animalsController = require("../controllers/animals");

router
    .route("/animals")
    .get(animalsController.animalsList);

// Get Method routes 
router
    .route('/animals/:animalCode')
    .get(animalsController.animalsFindByCode);
    
module.exports = router;