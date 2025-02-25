import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <main>
        {/* About Section */}
        <section id="about" className="content-section animate">
          <div className="text">
            <h2>About Chess</h2>
            <p>
              Chess is a strategic board game played between two players. The game is believed
              to have originated in India during the 6th century. It is played on an 8x8 grid
              with 64 squares. The goal of the game is to checkmate the opponent's king.
            </p>
            <p>
              Chess requires deep calculation, pattern recognition, and strong decision-making
              skills. It is widely regarded as one of the most intellectually stimulating games.
            </p>
          </div>
          <div className="image">
            <img src="/assets/Img01.jpg" alt="Chess Board" /> 
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="content-section animate">
          <div className="text">
            <h2>Rules of Chess</h2>
            <p>
              The game is played with 32 pieces, 16 for each player, which include a king, a
              queen, rooks, bishops, knights, and pawns. Each piece moves in a unique pattern.
            </p>
            <p>
              A player wins the game by checkmating the opponent's king, meaning the king is in
              a position to be captured and cannot escape.
            </p>
          </div>
          <div className="image">
            <img src="/assets/Img02.png" alt="Chess Pieces" />
          </div>
        </section>

        {/* Movement Section */}
        <section id="movement" className="content-section animate">
          <div className="text">
            <h2>Piece Movements</h2>
            <ul>
              <li><strong>King:</strong> Moves one square in any direction.</li>
              <li><strong>Queen:</strong> Moves diagonally, horizontally, and vertically any number of squares.</li>
              <li><strong>Rook:</strong> Moves straight horizontally and vertically.</li>
              <li><strong>Bishop:</strong> Moves diagonally any number of squares.</li>
              <li><strong>Knight:</strong> Moves in an 'L' shape.</li>
              <li><strong>Pawn:</strong> Moves forward one square, but captures diagonally.</li>
            </ul>
          </div>
          <div className="image">
            <img src="/assets/Img03.png" alt="Knight Movement" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
