import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2 id="contact" className="showBottom">
        Contacto
      </h2>
      <div>
        <div className="footer__info whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=3218312687"
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp showLeft"></i>
          </a>
          <p className="footer__text showLeft">Numero celular</p>
          <p className="showLeft">3218312687</p>
        </div>
        <div className="footer__info">
          <a href="mailto:morenojimenezjohanesteban@gmail.com" target="_blank">
            <i className="fa-regular fa-envelope showRigth"></i>
          </a>
          <p className="footer__text showRigth">Email</p>
          <p className="footer__email showRigth">
            morenojimenezjohanesteban@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
