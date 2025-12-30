const express = require('express');
const router = express.Router();
const donateController = require('../controllers/donate.controller');

router.get('/', donateController.getDonatePage);
router.post('/', donateController.postDonation);

module.exports = router;
