const fs = require('fs');
const mongoose = require('mongoose');
const Article = require('./models/Article');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/articlesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Read the articles JSON data from the file
  const articlesJson = JSON.parse(fs.readFileSync('articles.json', 'utf-8'));

  // Loop through each article in the JSON
  articlesJson.forEach(async (articleData) => {
    try {
    // Check if the article exists in the database
    console.log("looping for title - ", articleData.title)
    console.log("featured - ", articleData.featured)
    const existingArticle = await Article.findOne({ title: articleData.title });
    
    if (!existingArticle) {
      // If the article is new, insert it
      const newArticle = new Article(articleData);
      const savedArticle = await newArticle.save();
      console.log('New article saved:', savedArticle);
    } else {
      // If the article exists, check if any fields have changed
      console.log('article already exists');
      const hasChanges =
        existingArticle.content !== articleData.content ||
        existingArticle.category !== articleData.category ||
        existingArticle.featured !== articleData.featured ||
        !arraysEqual(existingArticle.tags, articleData.tags);
      console.log("existing featured - ", existingArticle.featured)
      console.log("updated featured - ", articleData.featured)
      
      if (hasChanges) {
        // If any fields have changed, update the article
        existingArticle.content = articleData.content;
        existingArticle.category = articleData.category;
        existingArticle.tags = articleData.tags;
        existingArticle.featured = articleData.featured;
        
        const updatedArticle = await existingArticle.save();
        console.log('Article updated:', updatedArticle);
      } else {
        // If no changes, skip the article
        console.log('No changes for article:', existingArticle.title);
      }
    }
  } catch (err) {
    console.error('Error processing article:', err);
  }
});
});

// Helper function to compare arrays
function arraysEqual(arr1, arr2) {
if (arr1.length !== arr2.length) return false;
return arr1.every((value, index) => value === arr2[index]);
}