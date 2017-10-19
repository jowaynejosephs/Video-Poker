var Hand = (function () {


    function Hand(cards) {
        this.card = cards || [];
    }

    //Add cards(cards array)
    Hand.prototype.addCards = function (cards) {
        this.cards = this.cards.concat(cards);
    }

    //deletecards(cardsarray)
    Hand.prototype.removeCards = function (names) {
        this.cards = this.cards.filter(function (item) {
            return !names.includes(item.name);
        });
    };

    //getbesthand()
    Hand.prototype.getBestHand = function () {
            return getGroups(this.cards);
    };

    function isFlush(cards) {
        return cards.length === 5 &&
            cards[0].suit === this.cards[1].suit &&
            cards[0].suit === this.cards[2].suit &&
            cards[0].suit === this.cards[3].suit &&
            cards[0].suit === this.cards[4].suit;
    }

    function getGroups(hand) {
        var groups = {};
        var propertyName = '';
        cards.forEach(function (card) {
            propertyName = card.value;
            if (groups[propertyName]) {
                groups[propertyName]++;
            }
            else {
                groups[propertyName] = 1;
            }
        
        });

        return groups;

    }
        return Hand
    })();