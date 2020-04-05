console.log("Up and running!");
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

function checkForMatch(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			console.log("You found a match!");
		} else {
			alert("Sorry, try again.");
			console.log("Sorry, try again.");
		}
		cardsInPlay = [];
	}
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();
}

function createBoard(){
	var gameBoard = document.getElementById('game-board');
	for (let i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		gameBoard.appendChild(cardElement);
	};
	var images  = gameBoard.querySelectorAll('img');
	for (let i = 0; i < images.length; i++){
		var image = images[i]
		image.addEventListener('click', function() {
			var cardId = this.getAttribute('data-id');
			console.log(1);
			this.setAttribute('src', cards[cardId].cardImage);
			console.log(2);
			flipCard(cardId);
			console.log(3);
		});
	}
	console.log(gameBoard);
}

createBoard();