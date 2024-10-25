import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <p><a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Application</a></p>
      <p><a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a></p>
    </div>
  );
};

export default Project;
