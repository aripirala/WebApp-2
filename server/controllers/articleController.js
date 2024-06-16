const Article = require('../models/Article');

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFeaturedArticles = async (req, res) => {
    try {
      const articles = await Article.find({featured:true});
      res.json(articles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.getCategoryArticles = async (req, res) => {
    try {
      const articles = await Article.find({category:req.params.category});
      res.json(articles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};