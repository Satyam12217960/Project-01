import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <h1>Welcome to the World of Chess ♟️</h1>
      </header>

      {/* Chess Section */}
      <section className="chess-section">
        <h2>♟️ The Game of Strategy</h2>
        <p>
          Chess is more than just a board game—it’s a battle of minds where every move counts.
          A single decision can change the course of the game, making it a test of intelligence,
          patience, and creativity. 
        </p>
        <p>
          From mastering <span className="highlight">opening strategies</span> to executing 
          <span className="highlight"> checkmate patterns</span>, chess teaches deep thinking and precision.
          Whether you're playing casually or competing in a tournament, each game offers a new challenge.
        </p>
        <p>
          Ready to dive deeper into the world of chess? Click below to explore more insights 
          and strategies.
        </p>
        <Link to="/about" className="about-button">Learn More</Link>
      </section>
    </div>
  );
};

export default Home;
