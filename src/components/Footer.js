import React from "react";
import { Link } from "react-scroll";
import circle from "../images/circle.png";
import logo from "../images/circlelogo.png";
import photoM from "../images/notebook.png";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <h2 className="footer__title">&#60;contact&#62;</h2>
        <div className="footer__img">
        <img
            className="footer__img--photo"
            src={photoM}
            alt="Patricia Vaquero"
          />
        </div>
        <div className="footer__content">
          <img
            className="footer__content--logo"
            src={logo}
            alt="logo Patricia Vaquero"
          />
          <p className="footer__content--text">Let's keep in touch!</p>
        </div>
        
        <div className="footer__rrss">
          <ul className="footer__rrss--list">
            <li>
              <a
                href="https://www.linkedin.com/in/patriciavaquerosaenz"
                alt="Linkedin profile"
                target="_blank"
                rel="noopener noreferrer"
                className="rrss_link"
              >
                <i class="fab fa-linkedin fa-lg icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/PatriciaVaqueroSaenz"
                alt="Github profile"
                target="_blank"
                rel="noopener noreferrer"
                className="rrss_link"
              >
                <i class="fab fa-github fa-lg icon"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:vaquerosaenzpatricia@gmail.com?subject=Contacto%20portfolio"
                alt="Email contact"
                target="_blank"
                rel="noopener noreferrer"
                className="rrss_link"
              >
                <i class="fas fa-envelope-square fa-lg icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pati_vaquero"
                alt="Twitter profile"
                target="_blank"
                rel="noopener noreferrer"
                className="rrss_link"
              >
                <i class="fab fa-twitter-square fa-lg icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__link--container">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={600}
        >
          <img className="footer__link" src={circle} alt="Go Home" />
        </Link>
      </div>
      <div className="footer__copy">
        <p>© 2021 · Developed by Patricia Vaquero with ♡ · </p>
      </div>
    </footer>
  );
};

export default Footer;
