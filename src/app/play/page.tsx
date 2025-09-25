'use client';
import React, { useState } from 'react';
import '../css/play.css';

const PlayComponent = () => {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [balls, setBalls] = useState(0);
   
    const handleRun = (runs) => {
        console.log("1 run clicked");
        setScore(score + runs);
        setBalls(balls + 1);
    }
    
    const handleClickWicket = () => {
        console.log("Wicket clicked");
        setWickets(wickets + 1);
        setBalls(balls + 1);      
    }

    const overs = Math.floor(balls / 6);
    const ballsInCurrentOver = balls % 6;
  return (
    <div className="scoreboard">
      <h1 className="title">useState and useEffect</h1>
      <h3 className="sub_title">Cricket Score Board</h3>

      <div className="stats">
        <div className="stat-box"> Score: {score}</div>
        <div className="stat-box"> Wickets: {wickets}</div>
        <div className="stat-box"> Balls: {balls}</div>
        <div className="stat-box"> Overs: {overs}.{ballsInCurrentOver}</div>
      </div>
      <div className='action'>
        <button onClick={() => handleRun(1)}>1 Runs</button>
        <button onClick={() => handleRun(2)}>2 Runs</button>
        <button onClick={() => handleRun(3)}>3 Runs</button>
        <button onClick={() => handleRun(4)}>4 Runs</button>
        <button onClick={() => handleRun(5)}>6 Runs</button> 
      </div>
        <div className='wicket'><button onClick={handleClickWicket}>Wicket</button></div>
    </div>
  );
};

export default PlayComponent;
