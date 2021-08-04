import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList(props) {
  return (
    <ul className="projects__list">
      {props.data.map((project) => (
        <li className="projects__list--itemContainer" key={project.id} id={project.id}>
          <ProjectItem
            id={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            tags={project.tags}
            url={project.url}
            urlGithub={project.urlGithub}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;