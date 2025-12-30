const express = require('express');
const router = express.Router();
const donateController = require('../controllers/donate.controller');

router.get('/', donateController.getDonatePage);
router.get('/confirm', donateController.getDonateConfirmPage);
router.get('/confirm/:id', donateController.getDonateConfirmPage);
router.post('/', donateController.postDonation);

module.exports = router;
