import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="landing">
        <div className="hook">
          <h3>Get ready for some Drag Wars - card game style!</h3>
        </div>
        <div className = "rules">
          <h4>The Rules:</h4>
          <p>The goal of the game is to create the best Drag Show army! Each player starts with a deck of 26 cards, an empty dealt-card pile, and 5 empty slots for their army. When all the cards have been dealt, the best army wins!</p>
          <p>Battle of the Queens is a 2 player game. So, you can either get a friend to play, or do both players' turns yourself.</p>
          <h5>How to win:</h5>
          <p>When all the cards have been dealt, the winner will be whoever has created the best Drag Show by having the most points in their 5-card army, according to the scoring system:</p>
          <ul>
            <li>Q = 13 points: Drag Queen - You MUST have at least one Drag Queen leading your army! If you have no Queens in your hand, you will automatically lose.</li>
            <li>K = 12 points: Drag King - Although there aren't as many in the world, Drag Kings rule too!</li>
            <li>J = 11 points: Emcee - What is a Drag War without a great emcee announcing the performers?!?!</li>
            <li>10 = 10 points: D </li>
            <li>9 = 9 points: Lighting Booth</li>
            <li>8 = 8 points: Stage Crew</li>
            <li>7 = 7 points: Makeup Artist</li>
            <li>6 = 6 points: Costumer</li>
            <li>5 = 5 points: Box Office</li>
            <li>4 = 4 points: Bouncer</li>
            <li>3 = 3 points: Clean-up Crew</li>
            <li>2 = 2 points: Bouncer</li>
            <li>A = 1 point: Bartender</li>
          </ul>
          <h5>On your turn...</h5>
          <p>Each turn, you can make 1 and ONLY 1 of the following moves:</p>
          <ul>
            <li>Click on your deck to flip over a card from your deck into your dealt slot</li>
            <li>OR Click on your dealt-card pile to move the top card from your dealt slot into your army</li>
            <li>OR Click on a card in your army to move it into the discard pile</li>
          </ul>
        </div>
        {/* <div className = "demo">A demo video will go here</div> */}
        <div className="landing-buttons" aria-live="polite">
          <Link to="/play">
            <button className="play-button">Play</button>
          </Link>
        </div>
        <div className="contact">
          <h5>Meet the Engineer</h5>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
