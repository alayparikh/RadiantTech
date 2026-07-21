import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <section className="page home-page">
      <Hero />
      <div className="section-content">
        <h2>Our Mission</h2>
        <p>RadiantTech helps businesses transform with intelligent automation solutions.</p>
      </div>
    </section>
  );
}

export default Home;
