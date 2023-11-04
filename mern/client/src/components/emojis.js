import React from "react";
import smile from '../smile.svg';
import neutral from '../neutral.svg';
import frown from '../frown.svg';
import "./emojis.css";

const Emoji = ({ type, count }) => {
  let emojiSrc;
  let altText;

  if (type === "smile") {
    emojiSrc = smile;
    altText = "smile";
  } else if (type === "neutral") {
    emojiSrc = neutral;
    altText = "neutral";
  } else if (type === "frown") {
    emojiSrc = frown;
    altText = "frown";
  }

  return (
    <div className="emoji-container">
      <img className="emoji-img" src={emojiSrc} alt={altText} />
      <span className="emoji-count">{count}</span>
    </div>
  );
};

const Emojis = ({ ratings }) => {
  return (
    <div className="emojis-container">
      {ratings &&
        ratings.map((rating) => (
          <div key={rating.page} className="rating-item">
            <h8>Page: {rating.page}</h8>
            <div className="emoji-container">
              <Emoji type="smile" count={rating.numSmile} />
              <Emoji type="neutral" count={rating.numNeutral} />
              <Emoji type="frown" count={rating.numFrown} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Emojis;
