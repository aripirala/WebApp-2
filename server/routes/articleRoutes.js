const express = require('express');
const router = express.Router();
const { getArticles, getFeaturedArticles, getArticleById, getCategoryArticles } = require('../controllers/articleController');

router.get('/articles', getArticles);
router.get('/featuredArticles', getFeaturedArticles);
router.get('/categoryArticles/:category', getCategoryArticles);
router.get('/article/:id', getArticleById);

module.exports = router;