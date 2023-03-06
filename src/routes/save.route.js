const express = require('express');
const router = express.Router();

const SaveController = require('../controllers/save.controller');
const saveController = new SaveController();

router.put('/pins/:pinId', saveController.savePin);

module.exports = router;
