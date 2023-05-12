import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Game.css";

function Game({ handleScoreUpdate }) {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: "big-ben",
      text: "The famous clock tower in London, England",
    },
    {
      id: 2,
      image: "burj-khalifa",
      text: "The tallest building in the world, located in Dubai, UAE",
    },
    {
      id: 3,
      image: "colosseum-rome",
      text: "An ancient amphitheater in Rome, Italy",
    },
    {
      id: 4,
      image: "eiffel-tower",
      text: "A famous landmark in Paris, France",
    },
    {
      id: 5,
      image: "grand",
      text: "A magnificent natural wonder in Arizona, USA",
    },
    {
      id: 6,
      image: "great-wall-of-china",
      text: "A series of fortifications built along the northern borders of China",
    },
    {
      id: 7,
      image: "mount",
      text: "The highest mountain in the world, located in the Himalayas",
    },
    {
      id: 8,
      image: "statue-of-liberty",
      text: "A symbol of freedom and democracy, located in New York City, USA",
    },
    {
      id: 9,
      image: "stone-henge",
      text: "A prehistoric monument in Wiltshire, England",
    },
    {
      id: 10,
      image: "sydney-opera",
      text: "A famous performing arts center in Sydney, Australia",
    },
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    if (selectedCard && !clickedCards.includes(cardId)) {
      const updatedScore = clickedCards.length + 1;
      handleScoreUpdate(updatedScore);
      setClickedCards((prevClickedCards) => [...prevClickedCards, cardId]);
      shuffleCards();
    } else {
      handleScoreUpdate(0);
      setClickedCards([]);
      shuffleCards();
    }
  };

  return (
    <div className="game">
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            text={card.text}
            handleCardClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
