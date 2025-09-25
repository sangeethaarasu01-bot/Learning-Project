import React from 'react';
import '../css/play.css';

const PlayComponent = () => {
  return (
    <div className="scoreboard">
      <h1 className="title">useState and useEffect</h1>
      <h3 className="sub_title">Cricket Score Board</h3>

      <div className="stats">
        <div className="stat-box"> Score: </div>
        <div className="stat-box"> Wickets: </div>
        <div className="stat-box"> Balls: </div>
        <div className="stat-box"> Overs: </div>
      </div>
      <div className='action'>
        <button>1 Runs</button>
        <button>2 Runs</button>
        <button>3 Runs</button>
        <button>4 Runs</button>
        <button>6 Runs</button> 
      </div>
        <div className='wicket'><button>Wicket</button></div>
    </div>
  );
};

export default PlayComponent;
