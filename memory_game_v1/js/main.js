var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
console.log("The card that was flipped is " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}
var showImgAndSuit = function(array, position){
	console.log("suit is " + array[position].suit);
	console.log("image is: " + array[position].cardImage);
}
flipCard(0);
showImgAndSuit(cards, 0);
console.log("");
flipCard(2);
showImgAndSuit(cards, 2);
console.log("");

