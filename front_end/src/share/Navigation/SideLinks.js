import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideLinks.css';

const NavLinks = props => {
  return <ul className="side-links">
    <li>
      <NavLink to="/home">Pants</NavLink>
    </li>
    <li>
      <NavLink to="/auth">Tops</NavLink>
    </li>
  </ul>
};

export default NavLinks;
