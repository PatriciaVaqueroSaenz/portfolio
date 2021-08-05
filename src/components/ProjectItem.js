import React from "react";
import hp from "../images/hp.png";

function ProjectItem(props) {
  return (
    <article className="projects__list--item">
      <h2 className="item__title">&#60;{props.title}&#62;</h2>
      <p className="item__description">{props.description}</p>
      <ul className="item__list-tags">
        {props.tags.map((tag, index) => (
          <li className="item__tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <div>
        <img className="item-img" src={props.img} alt="foto proyecto" />
      </div>
      <div className="item-links">
        <a
          href={props.url}
          alt={props.title}
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          <i class="fas fa-tv projectIcon"></i>
        </a>
        <a
          href={props.urlGithub}
          alt={props.title}
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          <i class="fas fa-code projectIcon"></i>
        </a>
      </div>
    </article>
  );
}

export default ProjectItem;
