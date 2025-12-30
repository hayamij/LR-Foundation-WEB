const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

router.get('/', newsController.getNewsPage);
router.get('/detail/:id?', newsController.getNewsDetail);
router.get('/reports', newsController.getReportsPage);
router.get('/stories', newsController.getStoriesPage);
router.get('/documents', newsController.getDocumentsPage);

module.exports = router;
