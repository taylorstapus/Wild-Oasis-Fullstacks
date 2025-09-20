var express = require('express');
var router = express.Router();
var controller = require('../controllers/residents');

/* Get travel page. */
router.get('/', controller.residents);

module.exports = router;