const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/parse', controller.parse);
module.exports = router;