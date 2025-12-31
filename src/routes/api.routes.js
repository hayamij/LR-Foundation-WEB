/**
 * API Routes
 * REST API endpoints for frontend JavaScript
 */

const express = require('express');
const router = express.Router();
const { mockPrograms, mockNews } = require('../data/mockData');

/**
 * GET /api/programs
 * Get list of programs with optional filtering
 */
router.get('/programs', (req, res) => {
  try {
    const { category, status, limit = 10, offset = 0 } = req.query;

    let filteredPrograms = [...mockPrograms];

    // Filter by category
    if (category) {
      filteredPrograms = filteredPrograms.filter(p => p.category === category);
    }

    // Filter by status
    if (status) {
      filteredPrograms = filteredPrograms.filter(p => p.status === status);
    }

    // Pagination
    const total = filteredPrograms.length;
    const paginatedPrograms = filteredPrograms.slice(
      parseInt(offset),
      parseInt(offset) + parseInt(limit)
    );

    res.json({
      success: true,
      data: paginatedPrograms,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Lỗi khi tải danh sách chương trình'
    });
  }
});

/**
 * GET /api/programs/:id
 * Get program detail by ID
 */
router.get('/programs/:id', (req, res) => {
  try {
    const programId = parseInt(req.params.id);
    const program = mockPrograms.find(p => p.id === programId);

    if (!program) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy chương trình'
      });
    }

    res.json({
      success: true,
      data: program
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Lỗi khi tải chi tiết chương trình'
    });
  }
});

/**
 * GET /api/news
 * Get list of news with optional filtering
 */
router.get('/news', (req, res) => {
  try {
    const { category, limit = 10, offset = 0 } = req.query;

    let filteredNews = [...mockNews];

    // Filter by category
    if (category) {
      filteredNews = filteredNews.filter(n => n.category === category);
    }

    // Pagination
    const total = filteredNews.length;
    const paginatedNews = filteredNews.slice(
      parseInt(offset),
      parseInt(offset) + parseInt(limit)
    );

    res.json({
      success: true,
      data: paginatedNews,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Lỗi khi tải danh sách tin tức'
    });
  }
});

/**
 * GET /api/news/:id
 * Get news detail by ID
 */
router.get('/news/:id', (req, res) => {
  try {
    const newsId = parseInt(req.params.id);
    const news = mockNews.find(n => n.id === newsId);

    if (!news) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy tin tức'
      });
    }

    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Lỗi khi tải chi tiết tin tức'
    });
  }
});

/**
 * POST /api/donations
 * Submit a donation
 */
router.post('/donations', async (req, res) => {
  try {
    const donationService = require('../services/donation.service');
    const { sanitizeDonationData } = require('../validators/donation.validator');

    // Sanitize input
    const sanitizedData = sanitizeDonationData(req.body);

    // Process through service (includes validation)
    const result = await donationService.processDonation(sanitizedData);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.errors,
        message: result.message
      });
    }

    // Return success response
    res.json({
      success: true,
      message: result.message,
      data: result.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Lỗi khi xử lý quyên góp'
    });
  }
});

/**
 * POST /api/contact
 * Submit a contact form
 */
router.post('/contact', (req, res) => {
  try {
    const { validateContactForm, sanitizeContactData } = require('../validators/contact.validator');

    // Sanitize input
    const sanitizedData = sanitizeContactData(req.body);

    // Validate input
    const validation = validateContactForm(sanitizedData);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        errors: validation.errors
      });
    }

    // TODO: Send email notification and save to database
    // For now, just return success
    res.json({
      success: true,
      message: 'Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Lỗi khi gửi tin nhắn'
    });
  }
});

module.exports = router;
