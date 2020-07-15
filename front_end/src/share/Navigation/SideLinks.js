import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideLinks.css';

const NavLinks = props => {
  return <ul className="side-links">
    <li>
      <NavLink to="/category/Pants">Pants</NavLink>
    </li>
    <li>
      <NavLink to="/category/Top">Top</NavLink>
    </li>
    <li>
      <NavLink to="/category/Dress">Dress</NavLink>
    </li>
    <li>
      <NavLink to="/category/Outerwear">Outerwear</NavLink>
    </li>
  </ul>
};

export default NavLinks;
