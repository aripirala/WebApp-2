// client/src/components/Sidebar.js

import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.lightBackground};
`;

const Category = styled.div`
  margin-bottom: 10px;
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <SidebarContainer>
      <Category onClick={() => onSelectCategory('')}>All Categories</Category>
      {categories.map((category, index) => (
        <Category key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </Category>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
