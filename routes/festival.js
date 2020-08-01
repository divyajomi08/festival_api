const express = require('express');
const router = express.Router();
const Festival = require('../models/festival');
const controller  = require('../controllers/festival');

router
.get('/',controller.getfestival)
.post('/',controller.postfestival);
// .put('/',controller.putstudent)
// .delete('/',controller.deletestudent);

module.exports = router;