import React, { useState, useRef } from 'react';
import Cards from './components/card';
import logo from './logo.svg';
import './App.css';


function App() {

  function fillcards () {
    let randnumarr = [];
    while (randnumarr.length <9) {
      let randnum = Math.floor(Math.random(30));
      if (!randnumarr.includes(randnum)) {
      randnumarr.push(randnum);
      }
    }
  return randnumarr;
  }

  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const [cardsdisplay, setCardsDisplay] = useState(fillcards());
  const [chosencards, setChosenCards] = useState('');
  const winRef = useRef(null);

  function HandleCardClick(cardclicked) {
    winRef.current.text('');
    if (chosencards === '') {
      let chosencopy = [];
      chosencopy.push(cardclicked);
      setChosenCards(chosencopy);
      setScore(score + 1);
    }

    if (typeof chosencards === "object") {
    if (score !== 30) {
    if (!chosencards.includes(cardclicked)) {
      let chosencopy = [...chosencards];
      chosencopy.push(cardclicked);
      setChosenCards(chosencopy);
      setScore(score + 1);
    }
    if (chosencards.includes(cardclicked)) {
    setChosenCards('');
    if (score > highscore) {
      setHighScore(score);
    }
     setScore(0);
    }
  }
  if (score === 30) {
    setHighScore(score);
    winRef.current.text('Congratulations, you chose all 30 NBA Teams')
    setChosenCards('');
  }
  }
  setCardsDisplay(fillcards());
  }


  return (
    <div id="memorycard">
      <div id="gametitle">NBA Memory Card Game</div>
      <div id="scorecont">
        <div id="score">Score: {score}</div>
        <div id="highscore">High Score: {highscore}</div>
      </div>
      <div id="winstatement" ref={winRef}></div>
      <div id="instructions">Click on each NBA team only once until you've chosen all 30!</div>
      <div id="cardcont">
        <ul>
          {cardsdisplay.map((cardnum) => {
            return (
              <li key={cardnum}>
                <Cards
                  onClick={HandleCardClick}
                  value={cardnum}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>       
  );
}

export default App;
