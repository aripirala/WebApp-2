//client/src/components/NavBar.js


import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004c3f; /* BCG green */
  color: #ffffff;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  a {
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: #d4d4d4; /* Light grey for hover effect */
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  margin-left: 1rem;
  background-color: #ffffff;
  color: #004c3f; /* BCG green */
`;

const NavBar = ({ onSearch, onHomeClick, onPopularClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };
  const handleHomeClick = () => {
    onHomeClick(); // Notify parent component to handle home click
  };

  const handlePopularClick = () => {
    onPopularClick(); // Notify parent component to handle popular click
  };

  return (
    <Nav>
      <Logo>Market Intelligence</Logo>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <NavList>
      <NavItem>
          <Link href="/" onClick={handleHomeClick}>Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/popular" onClick={handlePopularClick}>Popular</Link>
        </NavItem>
        <NavItem>
          <Link href="/empty"> </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
