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
},
];
var cardsInPlay = [];
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
alert ("You found a match!"); //change this to an alert at end of project
} else {
alert ("Sorry, try again."); //change this to an alert at end of project
}
}
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) { 
	checkForMatch();
	 }
}
flipCard(0);
flipCard(2);
