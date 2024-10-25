import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: "Note Taker App",
    description: "App designed to allow user to jot down thoughts and tasks and allows them to be updated and deleted.",
    image: "images/note-taker.png", 
    deployedLink: "https://express-ticket-to-knowledge.onrender.com/",
    repoLink: "https://github.com/yourusername/note-taker", 
  },
  {
    title: "Jack Black & Coke",
    description: "Just a little game of black jack.",
    image: "images/jack-black-coke.png", 
    deployedLink: "https://cbaumgart004.github.io/jackBlacknCoke/",
    repoLink: "https://github.com/yourusername/jack-black-coke", 
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
