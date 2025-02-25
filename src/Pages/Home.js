import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { text } from "framer-motion/client";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <h1 style={{ fontSize: "35px" }}>Welcome to the World of Chess ♟️</h1>
      </header>

      {/* Chess Section */}
      <section className="chess-section">
        <h2>♟️ The Game of Strategy</h2>
        <p>
          Chess is more than just a board game—it's a battle of minds where every move counts.
          A single decision can change the course of the game, making it a test of intelligence,
          patience, and creativity. 
        </p>
        <p>
          From mastering <span className="highlight">opening strategies</span> to executing 
          <span className="highlight"> checkmate patterns</span>, chess teaches deep thinking and precision.
        </p>
        <p>
          Ready to dive deeper into the world of chess? Click below to explore more insights 
          and strategies.
        </p>
        <div className="button-container">
          <Link to="/about" className="about-button">Learn More</Link><br/>
          <Link to="/booking" className="about-button">Book a Tournament</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
