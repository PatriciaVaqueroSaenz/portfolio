import React from "react";
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='nav-menu'>
      <ul className="nav-menu__list">
        <li className="nav-menu__list--item item">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            &#60;Home&#62;
          </Link>
        </li>
        <li className="nav-menu__list--item item">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            &#60;About me&#62;
          </Link>
        </li>
        <li className="nav-menu__list--item item">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            &#60;Projects&#62;
          </Link>
        </li>
        <li className="nav-menu__list--item item">
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
          >
            &#60;Contact&#62;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
