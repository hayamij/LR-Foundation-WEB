const express = require('express');
const router = express.Router();
const programsController = require('../controllers/programs.controller');

router.get('/', programsController.getProgramsPage);
router.get('/detail/:id?', programsController.getProgramDetail);

module.exports = router;
