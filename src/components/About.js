import React from "react";

const About = () => {
  return (
    <section id="about" className='about'>
        <h2 className="about__title">&#60;about me&#62;</h2>
        <h3 className="about__title">&#60;en&#62;</h3>
        <p className="about__content">
        I am a curious and restless person who likes to learn something new every day. Lover of new technologies. After several years developing in other areas, I decided that it was time to change course and train in something that had always interested me: programming, it was a good decision because I have found a passion that makes me happy and completes me.

        </p>
        <h3 className="about__title">&#60;es&#62;</h3>
        <p className="about__content">
        Soy una persona curiosa e inquieta a la que cada día le gusta aprender algo nuevo. Amante de las nuevas tecnologías. Tras varios años desarrollándome en otros ámbitos decidí que era el momento de cambiar el rumbo y formarme en algo que siempre me había interesado: la programación, fue una buena decisión porque he encontrado una pasión que me hace feliz y me completa.

        </p>

        <h2 className="about__title">&#60;technical skills&#62;</h2>
        <ul className="about__list">
          <li>html5</li>
          <li>css3</li>
          <li>javascript</li>
          <li>react</li>
          <li>git</li>
          <li>node js</li>
          <li>express</li>
          <li>bootstrap</li>
        </ul>
    </section>
  );
};

export default About;