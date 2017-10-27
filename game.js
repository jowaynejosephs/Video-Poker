var Game = (function () {

	function Game(){
		this.deck = new Deck(true)
		this.player=new Player();
		var player
		
		this.play = function() {
			var cardDiv=document.getElementById('cardfield')
			var play = document.getElementById('play')
			deck = new Deck(true)
			player = new Player()
			
	}
	
	function hold() {
		
	}
	
	function deal() {
		deck.deal();
	}
}

	return Game;

})();