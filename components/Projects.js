import React from 'react';
import project1 from '../img/project1.jpg';  // Ensure these paths are correct and images are in the img folder
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';

const Projects = () => {
  return (
    <section className="my-work">
      <h1 className="section__title">Projects</h1>
      <div className="portfolio">
        <div className="portfolio__item">
          <img src={project1} alt="Project 1" className="portfolio__img"/>
          <p>Project 1: Description and your role</p>  {/* Replace with actual project description */}
        </div>
        <div className="portfolio__item">
          <img src={project2} alt="Project 2" className="portfolio__img"/>
          <p>Project 2: Description and your role</p>  {/* Replace with actual project description */}
        </div>
        <div className="portfolio__item">
          <img src={project3} alt="Project 3" className="portfolio__img"/>
          <p>Project 3: Description and your role</p>  {/* Replace with actual project description */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
