const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'articlesDB';

// Connect to MongoDB
MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);

  // Fetch all articles from the 'articles' collection
  db.collection('articles').find({featured: true }).toArray(function(err, result) {
    if (err) throw err;

    console.log('Articles:', result);

    // Close the database connection
    client.close();
  });
});