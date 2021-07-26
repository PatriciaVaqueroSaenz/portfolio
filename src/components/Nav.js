import React from "react";
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='nav-menu'>
      <ul className="nav-menu__list">
        <li className="nav-menu__list--item">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
