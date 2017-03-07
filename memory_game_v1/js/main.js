var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];

var checkForMatch = function(){
if (cardsInPlay.length !== 2) {
	console.log("pick more cards!")
	return; }
	else if (cardsInPlay[0]===cardsInPlay[1]) {
		console.log("You found a match");	}
		else 
			console.log("Sorry, not a match, try again");
}

var flipCard = function(cardId){
console.log("The card that was flipped is " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}

flipCard(0);
flipCard(2);