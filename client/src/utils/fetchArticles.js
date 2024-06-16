// client/src/utils/fetchArticles.js

import axios from 'axios';

export const fetchArticles = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/articles');
    console.log("In fetchAricles - ", response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};