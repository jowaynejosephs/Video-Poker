var Player = (function () {

	const LOCAL_STORAGE_KEY = "VideoPokerAccount";
	function Player(bank) {
		this.account = bank || 1000;
		if (this.account === 1000) {
			this.account = loadFromLocalStorage();
		}
	}

	Player.prototype.updateAccount = function (amount) {
		this.account += amount
		saveToLocalStorage(this.account);
	}

	function loadFromLocalStorage() {
		return parseInt(localStorage.getItem(LOCAL_STORAGE_KEY) || '1000');
	}

	function saveToLocalStorage(account) {
		localStorage.setItem(LOCAL_STORAGE_KEY, account)
	}
	return Player;

})();