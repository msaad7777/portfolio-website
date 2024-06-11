import React from 'react';

const Home = () => {
  return (
    <div className="intro">
      <h1 className="section__title section__title--intro">
        Welcome to My Portfolio
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Dedicated to creating innovative web solutions.
      </p>
      <a href="/about" className="btn">Learn more about me</a>
    </div>
  );
};

export default Home;
