var Game = (function () {

	function Game() {

		//add true to shuffle
		this.deck = new Deck(true)
		this.player = new Player(1000);
		this.hand = new Hand();
		this.newHand = true;
		this.cardImages = []
		this.bet = 0;

		// this.play = function () {
		// 	var cardDiv = document.getElementById('cardfield')
		// 	var play = document.getElementById('play')
		// 	deck = new Deck(true)
		// 	player = new Player()

		// }

	}


	Game.prototype.play=function(){
		var self= this;

		var dealButton = document.getElementById("deal");

		this.cardImages[0] = document.getElementById("cardOne")
		this.cardImages[1] = document.getElementById("cardTwo")
		this.cardImages[2] = document.getElementById("cardThree")
		this.cardImages[3] = document.getElementById("cardFour")
		this.cardImages[4] = document.getElementById("cardFive")

		this.cardImages[0].addEventListener("click", function(event){
			self.hold(event.target)
		});

		this.cardImages[1].addEventListener("click", function(event){
			self.hold(event.target)
		});
		this.cardImages[2].addEventListener("click", function(event){
			self.hold(event.target)
		});
		this.cardImages[3].addEventListener("click", function(event){
			self.hold(event.target)
		});
		this.cardImages[4].addEventListener("click", function(event){
			self.hold(event.target)
		});

	//button
	dealButton.addEventListener("click", function(){
		self.deal()
	});
};

Game.prototype.deal = function (){
	this.bet=document.getElementById("bet").valueAsNumber;
	let playerBank = document.getElementById("bank")		//playerBank is bank
	let showHandName = document.getElementById("winner")  //showHandName is winner

	var self= this;

	if (this.newHand){
		this.player.updateAccount(-this.bet);
		playerBank.innerHTML = this.player.account;

		var cards= this.deck.deal(5);

		showCardsOnTable(this.cardImages[0], cards[0])
		showCardsOnTable(this.cardImages[1], cards[1])
		showCardsOnTable(this.cardImages[2], cards[2])
		showCardsOnTable(this.cardImages[3], cards[3])
		showCardsOnTable(this.cardImages[4], cards[4])

		this.hand = new Hand(cards);
		this.newHand = false
	}
	else {
		var removeCards =  document.querySelectorAll("img:not(.hold)")
		var newCards = this.deck.deal(removeCards.length);
		var removeCardNames = [];

		for (var i=0;i<removeCards.length;i++){
			removeCardNames.push(removeCards[i].getAttribute("card-name"));
			showCardsOnTable(removeCards[i], newCards[i]);
		}
		this.hand.deleteCards(removeCardNames.join(","))

		this.hand.addCards(newCards);

		var bestHand = this.hand.getBestHand();
		var winnings= this.bet * bestHand.multiplier + this.bet

		this.player.updateAccount(winnings);
		bank.innerHTML =this.player.account;
		winner.innerHTML=bestHand.name;

		this.newHand = true
	}
};

Game.prototype.hold = function(img){
	img.classList.toggle ("hold")
};

function showCardsOnTable(img, card){
	var self = this;
	img.src='img/' + card.name + '.png';
	img.setAttribute("card-name",card.name)
}



	return Game;

})();