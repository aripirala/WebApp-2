// client/src/pages/index.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/articles');
        setArticles(response.data);
        const uniqueCategories = [...new Set(response.data.map((article) => article.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Layout articles={articles} categories={categories} />
  );
};

export default HomePage;
