//client/src/components/ArticleList.js

import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';

const Container = styled.div`
  background: ${(props) => props.theme.colors.pageBackground}; /* Make the page background same as card background */
  padding: 20px;
`;

const ArticleList = ({ articles }) => {
  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </Container>
  );
};

export default ArticleList;
