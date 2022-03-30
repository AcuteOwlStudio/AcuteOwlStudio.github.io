import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="flex container">
          <Link className="logo" to="/">Acute Owl Studio</Link>
          <ul className="flex links">
            <li><Link to="/Games">Games</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
