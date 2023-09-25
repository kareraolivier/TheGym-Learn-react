import React from "react";
import "./meme.scss";
const MemeImageCard = ({ image, firstMeme, lastMeme }) => {
  return (
    <div>
      <div className="image">
        <div>
          <p>{firstMeme}</p>
          <p>{lastMeme}</p>
        </div>
        <img src={image} alt="meme" />
      </div>
    </div>
  );
};

export default MemeImageCard;
