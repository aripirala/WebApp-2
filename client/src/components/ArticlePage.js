import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  width: 70%;
`;

const RightColumn = styled.div`
  width: 25%;
  background: ${(props) => props.theme.colors.lightBackground};
  padding: 20px;
  border-left: 1px solid #ddd; /* Light vertical line separating the columns */
`;

const SimilarArticle = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  border-bottom: 1px solid #ddd; /* Faded light gray line separator */
  padding-bottom: 10px;
`;

const ArticlePage = ({ article, similarArticles }) => {
  console.log("Article in ArticlePage:", article);
  console.log("Similar Articles in ArticlePage:", similarArticles);

  if (!article) return <p>Loading article...</p>;

  return (
    <Container>
      <LeftColumn>
        <h1>{article.title}</h1>
        <p>{article.category}</p>
        <p>{article.content}</p>
        <p>{article.tags.join(', ')}</p>
        <p>{new Date(article.date).toLocaleDateString()}</p>
      </LeftColumn>
      <RightColumn>
        <h3>Similar Articles</h3>
        {similarArticles.map((similarArticle) => (
          <Link key={similarArticle._id} href={`/article/${similarArticle._id}`} passHref>
            <SimilarArticle>
              <h4>{similarArticle.title}</h4>
              <p>{similarArticle.content}</p>
            </SimilarArticle>
          </Link>
        ))}
      </RightColumn>
    </Container>
  );
};

export default ArticlePage;
