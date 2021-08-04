import React from "react";
import { Link } from 'react-scroll';
import circle from "../images/circle.png"

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <h2 className='footer__title'>&#60;contact&#62;</h2>
        <div className="footer__rrss">
          <p className="footer__rrss--text">Let's keep in touch!</p>
          <ul className="footer__rrss--list">
            <li>Linkedin</li>
            <li>Github</li>
            <li>Email</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className='footer__link--container'>
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
