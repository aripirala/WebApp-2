const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: true },
  date: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  views: {type: Number, default: 50},
  likes: {type: Number, default: 10},
});

module.exports = mongoose.model('Article', articleSchema);