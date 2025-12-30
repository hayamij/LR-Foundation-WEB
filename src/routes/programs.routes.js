const express = require('express');
const router = express.Router();
const programsController = require('../controllers/programs.controller');

router.get('/', programsController.getProgramsPage);
router.get('/detail/:id?', programsController.getProgramDetail);
router.get('/education', programsController.getEducationPage);
router.get('/healthcare', programsController.getHealthcarePage);
router.get('/social', programsController.getSocialPage);
router.get('/fundraising', programsController.getFundraisingPage);

module.exports = router;
