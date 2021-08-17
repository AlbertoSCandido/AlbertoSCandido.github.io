import React from 'react'
import styled from 'styled-components'
import BurgerNav from './BurgerNav';
import '../styles/header.css';
import { useLocation } from 'react-router-dom';

const Nav = styled.nav`
  // width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding-left: 15px 0;
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

// Navbar construído seguindo tutorial canal FullStack Mastery https://www.youtube.com/watch?v=GGkBwpxV7AI

const NavBar = () => {
  const { pathname } = useLocation();
  const dictionary = {
    '/': 'Home',
    '/projects': 'Projetos',
    '/contact': 'Contato',
    'default': 'Alberto Candido'
  }

  const logo = dictionary[pathname] || dictionary['default'];

  return (
    <header id="header">
      <Nav>
        <div className="logo">
          {logo}
        </div>
        <BurgerNav />
      </Nav>
    </header>
  )
}

export default NavBar
