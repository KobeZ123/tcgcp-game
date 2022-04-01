import tacoImage from './images/taco.PNG';
import catImage from './images/cat.PNG';
import goatImage from './images/goat.PNG';
import cheeseImage from './images/cheese.PNG';
import pizzaImage from './images/pizza.PNG';
import narwhalImage from './images/narwhal.PNG';
import gorillaImage from './images/gorilla.PNG';
import groundhogImage from './images/groundhog.PNG';
import React, { useRef, useEffect } from 'react';
import scripts from './scripts.js'

function CardTable() {

  const cardTableRef = useRef();
  const centerCardRef = useRef();

  useEffect(() => {
    console.log(cardTableRef.current);
    // const script = document.createElement("script");    
    // script.async = true;    
    // script.src = {scripts};    
    // document.body.appendChild(script);  
  });

  const handleClick = (e, data) => {
    // handles click 
    console.log(data);
  }

  return ( 
    <div className="card-table" ref ={cardTableRef}>
      <header className="header">
        <button>Host a server!</button>
      </header>
      <Card cardType={tacoImage} />
      <Card cardType={catImage} />
      <Card cardType={goatImage} />
      <Card cardType={cheeseImage} />
      <Card cardType={pizzaImage} />
      <Card cardType={narwhalImage} />
      <Card cardType={gorillaImage} />
      <Card cardType={groundhogImage} />
      <CardBack />
      <div ref={centerCardRef} className="center-deck">
        <p>
          DECK
        </p>
        </div>
    </div>
  )
  
}



class Card extends React.Component {
  render() {
    return (
      <div class="flip-card">
        <div class="flip-card-inner"> 
          <div className="flip-card-front">
            <img className="card-image" src={this.props.cardType} alt="card"></img>
          </div>
          <CardBack />
        </div>
        
      </div>
      
      
      
    )
  }
}

class CardBack extends React.Component {
  render() {
    return (  
      <div className="flip-card-back">
        <p>
          TACO CAT <br/>
          GOAT CHEESE PIZZA
        </p>
      </div>
    )
  }
}

export default CardTable;