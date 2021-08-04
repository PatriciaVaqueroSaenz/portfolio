import React from "react";

function ProjectItem(props) {
  return (
    <article className="projects__list--item">
      <h2 className="item__title">{props.title}</h2>
      <p className="item__description">{props.description}</p>
      <ul className="item__tags">
        {props.tags.map((tag, index) => (
          <li key={index}>
            <span></span>
            {tag}
          </li>
        ))}
      </ul>
      <div className="item-links">
        <a
          href={props.url}
          alt={props.title}
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          WEB
        </a>
        <a
          href={props.urlGithub}
          alt={props.title}
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          CODE
        </a>
      </div>
    </article>
  );
}

export default ProjectItem;
