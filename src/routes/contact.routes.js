const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/', contactController.getContactPage);
router.post('/', contactController.postContact);

module.exports = router;
