var cards = ['Queen', 'Queen', 'King', 'King'];

var cardsInPlay = [];

var cardOne;

cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("user flipped " + cardOne);

var cardTwo;

cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipped " + cardTwo);

if (cardsInPlay.length !== 2) {
	alert("error"); }
	else if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match");	}
		else 
			alert("Sorry, try again");