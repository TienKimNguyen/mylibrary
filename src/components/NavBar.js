import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} className="logo" />
          <h1 className="logo-title">BOOKLAND</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/mybooks' activeStyle>
            My Books
          </NavLink>
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;