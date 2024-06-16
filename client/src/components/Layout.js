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
  height: calc(100vh - 100px); /* Adjust based on your fixed navbar height */
`;

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.lightBackground};
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 1;
  padding-left: 20px;
  overflow-y: auto;
`;

const CategoryTitle = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

const ArticleWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 10px;
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
  const handleHomeClick = () => {
    // Reset filter to show all articles
    setSelectedCategory('');
    setFilteredArticles(articles);
  };

  const handlePopularClick = () => {
    const sortedArticles = [...articles].sort((a, b) => b.views - a.views); // Sort by views (example)
    setFilteredArticles(sortedArticles);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar onSearch={handleSearch} onHomeClick={handleHomeClick} onPopularClick={handlePopularClick} />
      <Container>
        <SidebarContainer>
          <Sidebar categories={categories} onSelectCategory={handleCategorySelect} />
        </SidebarContainer>
        <MainContent>
          {/* <header>
            <h1>One place to find all the current trends</h1>
          </header> */}
          <main>
            {children ? (
              children
            ) : (
        //   </header>
              <div>
                {selectedCategory && <CategoryTitle>{selectedCategory}</CategoryTitle>}
                <div>
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
