import React from "react";
import TryAgainLogo from "@/app/assets/img/try-again.gif";
const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <div onClick={onRestart} className="gameOver">
        <img
          alt="Try again"
          src={TryAgainLogo.src}
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

};

export default GameOverlay;
