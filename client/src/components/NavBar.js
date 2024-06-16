import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
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
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: #bada55;
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
`;

const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Nav>
      <Logo>My Logo</Logo>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <NavList>
        <NavItem><Link href="/">Home</Link></NavItem>
        <NavItem><Link href="/about">Categories</Link></NavItem>
        <NavItem><Link href="/services">Popular</Link></NavItem>
        <NavItem><Link href="/contact">  </Link></NavItem>
      </NavList>
      
    </Nav>
  );
};

export default NavBar;
