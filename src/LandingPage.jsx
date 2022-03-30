import { Link } from "react-router-dom";
import cardGameImage from './images/taco-cat-goat-cheese-pizza-png.png'; // with import
import downArrow from './images/down-arrow.png';
import React, { useState } from 'react';

function LandingPage() {

  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  return ( 
    <div className="landing-page">
      <header className="header">
        <div>
          <h1 className="welcome-text">WELCOME TO THE GAME</h1>
          <div>
            <img src={cardGameImage} className="card-deck-image"></img>
          </div>
          <div> 
            <a href="https://www.amazon.com/Taco-Cat-Goat-Cheese-Pizza/dp/B077Z1R28P">BUY THE GAME HERE</a>
          </div>
          <div className="spacer-div">
            {/* Endpoint to route to Home component */}
            <Link to="/cardtable" className="welcome-text"><button className="play-button" >PLAY THE ONLINE GAME</button></Link>
          </div>
        </div>
        
      </header>
      <div className="game-info">
        <h3>2-8 Players</h3>
        <h3>Game Designed by Dave Campbell</h3>
        <h3>Published by Dolphin Hat Games</h3>

      </div>

      <div className="instructions-panel">
        <div className="instructions"> 
          <h1>GAME INSTRUCTIONS</h1>
          <img className="down-arrow" src={downArrow} onClick={()=>setIsInstructionsOpen(!isInstructionsOpen)}></img>
        </div>

        <InstructionsExpanded display={isInstructionsOpen}/>
      </div>
      
    </div>
  )
}

class InstructionsExpanded extends React.Component {
  render() {
    if (this.props.display) {
      return (
        <div className="instructions-expanded">
          <p style={{fontSize: "20px"}}><strong>TACO CAT GOAT CHEESE PIZZA</strong> is sure to bring some card-slapping belly laughs to your table. 
            <br />The best thing about it? <strong>ANYONE</strong> can play!
            <br />Find out why everyone is <strong>RAVING</strong> about this <strong>TOP-SELLING</strong> game and get in on the action!
          </p>
          <iframe width="1024" height="576" src="https://www.youtube.com/embed/Q4qJXm2Kbwg" 
          title="Taco Cat Goat Cheese Pizza Instruction Video" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

  
  
  
export default LandingPage;