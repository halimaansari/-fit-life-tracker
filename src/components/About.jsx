import React from 'react';
import './About.css';  

function About() {
  return (
    <section id="about">
      <div className="about-content">
        <h2 className="about-title">Our Mission</h2>
        <p className="about-description">
          At FitTrack, we believe fitness is not just about exercise; it's about creating a lifestyle. Our mission is to help you achieve your full potential, combining tailored workouts, expert guidance, and a supportive community to inspire confidence and health in every step you take.
        </p>
        <a href="#contact" className="about-cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default About;
