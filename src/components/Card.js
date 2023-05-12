import React from "react";

const Card = ({ image, text, handleCardClick }) => {
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={`/images/${image}.jpg`} alt="card" />
      <p>{text}</p>
    </div>
  );
};

export default Card;
