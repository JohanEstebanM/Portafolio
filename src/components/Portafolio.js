import React from "react";
import "../styles/Portafolio.css";

const Portafolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portafolio</h2>
      <div className="portfolio__img">
        <a href="https://wiki-rick-and-morty-johan.netlify.app/">
          <img
            src={`${process.env.PUBLIC_URL}/RickAndMorty.PNG`}
            alt="Rick and Morty"
          ></img>
        </a>
        <a href="https://weather-johan.netlify.app/">
          <img
            src={`${process.env.PUBLIC_URL}/Weather.PNG`}
            alt="Weather"
          ></img>
        </a>
        <a href="https://phrases-johan.netlify.app/">
          <img
            src={`${process.env.PUBLIC_URL}/Phrases.PNG`}
            alt="Phrases"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Portafolio;
