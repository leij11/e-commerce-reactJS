import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
      <React.Fragment>
    <Link to="/" > SHOP HERE</Link>
    <button onClick={openMenu}>
       &#9776;
    </button>

    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          &#10006;
        </button>
        <ul className="categories">
          <li>
            <Link to="/product">PRODUCTS</Link>
          </li>

          <li>
            <Link to="/auth">auth</Link>
          </li>

        </ul>
      </aside>
    </React.Fragment>
  )
}

export default SideDrawer
