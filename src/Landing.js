import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="landing">
        <div className="hook">
          <p>Get ready for some Drag Wars - card game style!</p>
        </div>
        <div className="landing-buttons" aria-live="polite">
          <Link to="/play">
            <button className="play-button">Play</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
