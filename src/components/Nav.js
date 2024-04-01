import React, { useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav>
      <button className="nav__toggle" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`nav__menu ${menuVisible ? 'nav__menu__visible' : ''}`}>
        <a href="#home" className="nav__menu__home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" className="nav__menu__about" onClick={closeMenu}>
          Acerca de mí
        </a>
        <a href="#skill" className="nav__menu__skill" onClick={closeMenu}>
          Mis habilidades
        </a>
        <a href="#portfolio" className="nav__menu__portfolio" onClick={closeMenu}>
          Portafolio
        </a>
        <a href="#contact" className="nav__menu__contact" onClick={closeMenu}>
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Nav;
