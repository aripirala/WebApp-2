// client/src/components/Layout.js

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import ArticleCard from './ArticleCard';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

// Styled Components
const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px; /* Add padding to avoid content being hidden behind the fixed navbar */
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const MainContent = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const CategoryTitle = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

const ArticleWrapper = styled.div`
  flex: 0 0 calc(33.33% - 20px); /* 3 cards per row */
  max-width: calc(33.33% - 20px);
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 20px); /* 2 cards per row on smaller screens */
    max-width: calc(50% - 20px);
  }
  @media (max-width: 480px) {
    flex: 0 0 100%; /* 1 card per row on very small screens */
    max-width: 100%;
  }
`;

const Layout = ({ children, articles = [], categories = [] }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (query) => {
    if (!query) {
      setFilteredArticles(articles);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerCaseQuery) ||
          article.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredArticles(filtered);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = articles.filter((article) => article.category === category);
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar onSearch={handleSearch} />
      <Container>
        <Sidebar categories={categories} onSelectCategory={handleCategorySelect} />
        <MainContent>
          <header>
            <h1>One place to find all the current trends</h1>
          </header>
          <main>
            {children ? (
              children
            ) : (
              <div>
                {selectedCategory && <CategoryTitle>{selectedCategory}</CategoryTitle>}
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {filteredArticles.map((article) => (
                    <ArticleWrapper key={article._id}>
                      <ArticleCard article={article} />
                    </ArticleWrapper>
                  ))}
                </div>
              </div>
            )}
          </main>
          <footer>
            <p>&copy; Powered By MarSeer AI</p>
          </footer>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
