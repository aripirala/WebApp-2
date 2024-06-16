import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/Layout';
import ArticlePage from '../../components/ArticlePage';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [similarArticles, setSimilarArticles] = useState([]);

  useEffect(() => {
    if (id) {
      // console.log("id - ", id)
      const fetchArticle = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/article/${id}`);
          // console.log(response.data)
          setArticle(response.data);
          const similarResponse = await axios.get(`http://localhost:3000/api/categoryArticles/${response.data.category}`);
          // console.log(similarResponse.data)
          setSimilarArticles(similarResponse.data.filter((a) => a._id !== id));
          // console.log("filtered articles - ", similarArticles)
        } catch (error) {
          console.error('Error fetching article:', error);
        }
      };

      fetchArticle();
    }
  }, [id]);

  useEffect(() => {
    console.log("In ID: Article:", article);
    console.log("In ID: Similar Articles:", similarArticles);
  }, [article, similarArticles]);

  if (!article) return <p>Loading...</p>;

  return (
    <Layout>
      <ArticlePage article={article} similarArticles={similarArticles} />
    </Layout>
  );
};

export default Article;