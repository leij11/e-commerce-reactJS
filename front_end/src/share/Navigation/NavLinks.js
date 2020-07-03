import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">

    <li>
      <NavLink to="/auth">LOGIN</NavLink>
    </li>
    <li>
    <NavLink to="/cart">CART</NavLink>
    </li>
  </ul>
};

export default NavLinks;
