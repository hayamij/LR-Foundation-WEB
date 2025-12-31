const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

router.get('/', newsController.getNewsPage);
router.get('/detail/:id?', newsController.getNewsDetail);

module.exports = router;
