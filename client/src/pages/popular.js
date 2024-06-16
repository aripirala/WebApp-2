// client/src/pages/popular.js

import React from 'react';
import Layout from '../components/Layout';
 
import { fetchArticles } from '../utils/fetchArticles';

const Popular = ({ articles }) => {
  // Sort articles by views (example)
  const sortedArticles = [...articles].sort((a, b) => b.views - a.views);
console.log("sorted articles -------------------------  ", sortedArticles)

  return (
    
    <Layout articles={sortedArticles}>
    {/* <h1>Popular Articles</h1>   */}

    </Layout>
  );
};

export async function getStaticProps() {
  // Fetch articles from your data source
  const articles = await fetchArticles();
  console.log("In popular - ", articles)

  return {
    props: {
      articles,
    },
  };
}

export default Popular;