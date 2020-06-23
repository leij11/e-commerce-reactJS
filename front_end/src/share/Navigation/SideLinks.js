import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideLinks.css';

const NavLinks = props => {
  return <ul className="side-links">
    <li>
      <NavLink to="/product/pants">Pants</NavLink>
    </li>
    <li>
      <NavLink to="/product/top">Tops</NavLink>
    </li>
  </ul>
};

export default NavLinks;
