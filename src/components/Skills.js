import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skill" id="skill">
      <h2 className="showBottom">Mis habilidades</h2>
      <div className="skill__items">
        <div>
          <i className="fa-brands fa-css3-alt showLeft"></i>
          <p className="showLeft">CSS</p>
        </div>
        <div>
          <i className="fa-brands fa-html5 showRigth"></i>
          <p className="showRigth">HTML</p>
        </div>
        <div>
          <i className="fa-brands fa-js showLeft"></i>
          <p className="showLeft">JS</p>
        </div>
        <div>
          <i className="fa-brands fa-react showRigth"></i>
          <p className="showRigth">React</p>
        </div>
        <div>
          <i className="fa-solid fa-database showLeft"></i>
          <p className="showLeft">SQL</p>
        </div>
        <div>
          <i className="fa-brands fa-php showRigth"></i>
          <p className="showRigth">PHP</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
