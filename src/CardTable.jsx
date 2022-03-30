import tacoImage from './images/taco.PNG';
import catImage from './images/cat.PNG';
import goatImage from './images/goat.PNG';
import cheeseImage from './images/cheese.PNG';
import pizzaImage from './images/pizza.PNG';
import narwhalImage from './images/narwhal.PNG';
import gorillaImage from './images/gorilla.PNG';
import groundhogImage from './images/groundhog.PNG';
import React from 'react';

function CardTable() {
  return ( 
    <div className="card-table">
      <script src="scripts.js"></script>
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
    </div>
    
  )
}



class Card extends React.Component {
  render() {
    return (
      <img className="card" src={this.props.cardType}></img>
    )
  }
}

export default CardTable;