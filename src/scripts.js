console.log("SCRIPTS");


const cards = document.querySelectorAll('[id="card"]');

// https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
// deals with dragging and dropping cards 

console.log(cards);

// cards.forEach(card => attachToCard(card) );

// adds animation adjustment and eventListeners to all cards
function attachToCard(card) {
  card.bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    card.removeClass("animated")  
  });

  console.log("ATTACHING");
  console.log(card);

  card.hover(function(){card.addClass("animated");});

  card.addEventListener('dragstart', dragStart)
};

function dragStart(e) {
  console.log("DRAGGING");
}