import React from "react";
import htmlIcon from "../images/html5.svg";
import cssIcon from "../images/css3.svg";
import jsIcon from "../images/js.svg";
import reactIcon from "../images/react.svg";
import gitIcon from "../images/git.svg";
import gulpIcon from "../images/gulp.svg";
import sassIcon from "../images/sass.svg";
import nodeIcon from "../images/nodejs.svg";
import bootstrapIcon from "../images/boot.svg";
import npmIcon from "../images/npm.svg";
import ghIcon from "../images/github.svg";
import expressIcon from "../images/express.svg";
import eclipseIcon from "../images/eclipse.svg";
import netbeansIcon from "../images/netbeans.svg";
import codeIcon from "../images/code.svg";
import scrumIcon from "../images/scrum.png";
import sqlIcon from "../images/sql.png";
import zeplinIcon from "../images/zeplin.png";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">&#60;about me&#62;</h2>
      <h3 className="about__title">&#60;en&#62;</h3>
      <p className="about__content">
        I am a curious and restless person who likes to learn something new
        every day. Lover of new technologies. After several years developing in
        other areas, I decided that it was time to change course and train in
        something that had always interested me: programming, it was a good
        decision because I have found a passion that makes me happy and
        completes me.
      </p>
      <h3 className="about__title">&#60;es&#62;</h3>
      <p className="about__content">
        Soy una persona curiosa e inquieta a la que cada día le gusta aprender
        algo nuevo. Amante de las nuevas tecnologías. Tras varios años
        desarrollándome en otros ámbitos decidí que era el momento de cambiar el
        rumbo y formarme en algo que siempre me había interesado: la
        programación, fue una buena decisión porque he encontrado una pasión que
        me hace feliz y me completa.
      </p>

      <h2 className="about__title">&#60;technical skills&#62;</h2>
      <ul className="about__list">
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={htmlIcon}
            alt="HTML5 Icon"
          />
          HTML5
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={cssIcon}
            alt="CSS3 Icon"
          />
          CSS3
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={jsIcon}
            alt="Javascript Icon"
          />
          Javascript
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={reactIcon}
            alt="React Icon"
          />
          React
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={gitIcon}
            alt="Git Icon"
          />
          Git
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icongulp"
            src={gulpIcon}
            alt="Gulp Icon"
          />
          Gulp
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={sassIcon}
            alt="Sass Icon"
          />
          Sass
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={nodeIcon}
            alt="Node JS Icon"
          />
          Node js
        </li>
        <li className="about__list--item">
        <img
            className="about__list--item-icon"
            src={expressIcon}
            alt="Express Icon"
          />
          Express</li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={bootstrapIcon}
            alt="Bootstrap Icon"
          />
          Bootstrap
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={npmIcon}
            alt="Npm Icon"
          />
          Npm
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={ghIcon}
            alt="Github Icon"
          />
          Github
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={scrumIcon}
            alt="Scrum Icon"
          />
          Scrum-Agile
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={netbeansIcon}
            alt="Netbeans Icon"
          />
          Netbeans
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={eclipseIcon}
            alt="Eclipse Icon"
          />
          Eclipse
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={sqlIcon}
            alt="MySQL Icon"
          />
          MySQL
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={codeIcon}
            alt="VS Code Icon"
          />
          VS Code
        </li>
        <li className="about__list--item">
          <img
            className="about__list--item-icon"
            src={zeplinIcon}
            alt="Zeplin Icon"
          />
          Zeplin
        </li>
      </ul>
    </section>
  );
};

export default About;
