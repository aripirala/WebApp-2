import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import ArticleCard from './ArticleCard';
import NavBar from './NavBar';


// Styled Components
const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px;
padding-top: 80px; /* Add padding to avoid content being hidden behind the fixed navbar */
background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const CategoryRow = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 20px;
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

const Layout = ({ children, articles = [] }) => {
    const [filteredArticles, setFilteredArticles] = useState(articles);
  
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
  
    const categorizedArticles = filteredArticles.reduce((acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = [];
      }
      acc[article.category].push(article);
      return acc;
    }, {});
  
    return (
      <ThemeProvider theme={theme}>
        <NavBar onSearch={handleSearch} />
        <Container>
          <header>
            <h1>One place to find all the current trends</h1>
          </header>
          <main>
            {children ? (
              children
            ) : (
              Object.keys(categorizedArticles).map((category) => (
                <div key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  <CategoryRow>
                    {categorizedArticles[category].slice(0, 3).map((article) => (
                      <ArticleWrapper key={article._id}>
                        <ArticleCard article={article} />
                      </ArticleWrapper>
                    ))}
                  </CategoryRow>
                </div>
              ))
            )}
          </main>
          <footer>
            <p>&copy; Powered By MarSeer AI</p>
          </footer>
        </Container>
      </ThemeProvider>
    );
  };

//   const Layout = ({ children, articles = [] }) => {
//     // Categorize articles based on their category
//     const categorizedArticles = articles.reduce((acc, article) => {
//       if (!acc[article.category]) {
//         acc[article.category] = [];
//       }
//       acc[article.category].push(article);
//       return acc;
//     }, {});
  
//     console.log('Categorized Articles:', categorizedArticles);
  
//     return (
//       <ThemeProvider theme={theme}>
//         <NavBar />
//         <Container>
//           <main>
//             {children ? (
//               children
//             ) : (
//               Object.keys(categorizedArticles).length > 0 ? (
//                 Object.keys(categorizedArticles).map((category) => (
//                   <div key={category}>
//                     <CategoryTitle>{category}</CategoryTitle>
//                     <CategoryRow>
//                       {categorizedArticles[category].slice(0, 3).map((article) => (
//                         <ArticleWrapper key={article._id}>
//                           <ArticleCard article={article} />
//                         </ArticleWrapper>
//                       ))}
//                     </CategoryRow>
//                   </div>
//                 ))
//               ) : (
//                 <p>No articles available</p>
//               )
//             )}
//           </main>
//           <footer>
//             <p>&copy; Powered By MarSeer AI</p>
//           </footer>
//         </Container>
//       </ThemeProvider>
//     );
//   };
  
  
  

export default Layout;
