import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header id="home">
      <img
        src={`${process.env.PUBLIC_URL}/Foto.jpg`}
        alt="Foto perfil"
        className="img__profile"
      />
      <h3 className="showBottom">Hola, soy Johan Moreno</h3>
      <h1 className="showBottom">Diseñador y desarrollador web</h1>
      <div>
        <a
          href="https://www.linkedin.com/in/johan-esteban-moreno-jim%C3%A9nez-71051b265/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin showLeft"></i>
        </a>
        <a
          href="https://www.instagram.com/johanesteban132/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram showBottom"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-square-twitter showRigth"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
