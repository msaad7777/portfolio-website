import React from 'react';
import yourPhoto from '../img/SAAD2.jpg';  // Ensure this path is correct and the image is in the img folder

const About = () => {
  return (
    <section className="about-me">
      <h1 className="section__title section__title--about">About Me</h1>
      <img src={yourPhoto} alt="Mohammed Saad" className="about-me__img"/>  {/* Replace alt text with your name */}
      <p className="section__subtitle section__subtitle--about">
        My name is Mohammed Saad, a DevOps Engineer and aspiring web developer.
      </p>
      <a href="../img/Saad_Mohammed_Resume.pdf" download className="btn">Download My Resume</a>  {/* Update this path with your resume's actual path */}
    </section>
  );
};

export default About;
