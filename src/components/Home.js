import React from "react";
import photo from '../images/photo2.png';

const Home = () => {
  return (
    <section id="home" className="home">
      <h2 className="home__title">&#60;home&#62;</h2>
      <div className="home__container">
        <div className='home__container--img'>
          <img className="home__container--image" src={photo} alt="Patricia Vaquero" />
        </div>
        <div className="home__container--text">
          <p className="home__text">Hi! Welcome to my portfolio... Hope you enjoy it!</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
