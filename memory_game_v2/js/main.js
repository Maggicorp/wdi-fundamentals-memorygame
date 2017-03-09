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

var progressBox = document.getElementById('progress');

var scoreBoard = document.getElementById('scoreBoard');
var w = 0;
var l = 0;

var checkForMatch = function(){

	if (cardsInPlay.length === 1) {
	progressBox.innerHTML = "<p>Pick another card!</p>";
	return; }
	else if (cardsInPlay[0]===cardsInPlay[1]) {
	progressBox.innerHTML = "<p>Your Seahorses match!!!</p>";
	w++;
	scoreBoard.innerHTML = "<p>Won:" + w + "&nbsp; Lost:" + l + "</p>";
	}
		else {
			progressBox.innerHTML = "<p>Sorry, those Seahorses don't match</p>";
			l++;
			scoreBoard.innerHTML = "<p>Won:" + w + "&nbsp; Lost:" + l + "</p>";

		}
};

var flipCard = function(){
	var cardId=this.getAttribute('data-id');
	console.log("The card that was flipped is " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length<=2){
			checkForMatch();
	}
};
var createBoard = function(){
	for(var i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('id', "card" + i);
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();

var resetFunction = function() {
	document.getElementById('card0').remove();
	document.getElementById('card1').remove();
	document.getElementById('card2').remove();
	document.getElementById('card3').remove();
	createBoard();
	cardsInPlay = [];
	progressBox.innerHTML = "<p>Let's play again!</p>";
};

							
var resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', resetFunction);




