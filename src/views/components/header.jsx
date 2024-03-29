import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="flex container">
          <img className="logoImg" src="./OwlLogo.png"/>
          <Link className="logo" to="/">Acute Owl Studio</Link>
          <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={handleClick}>
            <span className="sr-only" aria-expanded="false"> Menu </span>
          </button>
          <ul id="primary-navigation" className="flex links" data-visible="false">
            <li><Link to="/Games">Games</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><a href="https://www.youtube.com/channel/UC5LV-fAAlBFpidSv1wktJeA" target="_blank" className="github"><i className="fa-brands fa-youtube"></i><span className="sr-only">Youtube</span></a></li>
            <li><a href="https://www.instagram.com/acute_owl_studio/?hl=en" target="_blank" className="github"><i className="fa-brands fa-instagram"></i><span className="sr-only">Instagram</span></a></li>
            <li><a href="https://www.tiktok.com/@acuteowlstudio" target="_blank" className="github"><i className="fa-brands fa-tiktok"></i><span className="sr-only">TikTok</span></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );

  // <li><a href="https://discord.com/invite/rDfrqNykzM" className="github"><i className="fa-brands fa-discord"></i><span className="sr-only">Discord</span></a></li>

  function handleClick() {
    const nav = document.querySelector("#primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    if(nav.getAttribute('data-visible') === "false"){
      nav.setAttribute('data-visible', true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute('data-visible', false);
      navToggle.setAttribute("aria-expanded", false);
    }
  }
}

export default Header;
