const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about.controller');

router.get('/', aboutController.getAboutPage);
router.get('/vision', aboutController.getVisionPage);
router.get('/team', aboutController.getTeamPage);

module.exports = router;
