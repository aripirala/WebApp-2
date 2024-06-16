// client/src/pages/index.js

import React from 'react';
import Layout from '../components/Layout';
import articles from '../../server/articles.json'

const categories = [
  "INCERTO",
  "The Medium Blog",
  "Education",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "The Generator",
  "Human Parts",
  "Data Science"
];

// const articles = [
//   {
//     _id: '1',
//     title: 'The Future of Programming',
//     category: 'Technology',
//     content: 'What to expect in the next decade of software development....',
//     tags: ['Programming', 'Future'],
//     views: 150000,
//     likes: 1000
//   },
//   // ... more articles
// ];

const HomePage = () => {
  return (
    <Layout articles={articles} />
  );
};

export default HomePage;
