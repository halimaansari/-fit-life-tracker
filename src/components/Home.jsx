import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="content-container">
        <h1 className="headline">Transform Your Fitness Journey</h1>
        <p className="subheading">Achieve your goals with personalized fitness plans and guidance.</p>
        <a href="#get-started" className="cta-button">Start Now</a>
      </div>
    </section>
  );
}

export default Home;
