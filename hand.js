var Hand = (function () {

    var groupLength = 0;

    function Hand(cards) {
        this.cards = cards || [];
    }

    //Add cards(cards array)
    Hand.prototype.addCards = function (cards) {
        this.cards = this.cards.concat(cards);
    }

    //deletecards(cardsarray)
    Hand.prototype.deleteCards = function (names) {
        this.cards = this.cards.filter(function (item) {
            return !names.includes(item.name);
        });
    };

    //getbesthand()
    Hand.prototype.getBestHand = function () {

        // this.cards = [
        //     new Card('6H'),
        //     new Card('6H'),
        //     new Card('6H'),
        //     new Card('6H'),
        //     new Card('10H')
        // ];

        var groups = getGroups(this.cards);

        if (isRoyalFlush(groups, this.cards)) {
            return {
                name: "Royal Flush",
                multiplier: 250,
            }

        }

         else if (isStraightFlush(groups)) {
            return {
                name: "Straight Flush",
                multiplier: 50,
            }

        }



       else if (isFourOfAKind(groups)) {
            return {
                name: "Four of A Kind",
                multiplier: 40,
            }

        }

        else if (isFullHouse(groups)) {
            return {
                name: "Is Full House",
                multiplier: 10
            }
        }



            else  if (isFlush(this.cards)) {
                return {
                    name: "Flush",
                    multiplier: 7
                }
            }

             else if (isStraight(groups)) {
                return {
                    name: "is Straight",
                    multiplier: 5
                }
            }

             else if (isThreeOfAKind(groups)) {
                return {
                    name: "is Three of A Kind",
                    multiplier: 3
                }
            }

              else if (isTwoPair(groups)) {
                return {
                    name: "is Two Pair",
                    multiplier: 2
                }
            }

       

        else if (isJacksOrBetter(groups)) {
                return {
                    name: "is Jacks or Better",
                    multiplier: 1
                }
            }

        else{
            return {
                name: "Game Over",
                multiplier: 0
            }
        }
     }








    function getGroups(cards) {
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

        groupLength = Object.getOwnPropertyNames(groups).length;
        return groups;

    }


    function isRoyalFlush(groups, cards) {
        var positionZero = 0;

        //run isFlush function 
        var isFlush = cards.length === 5 &&
            cards[0].suit === cards[1].suit &&
            cards[0].suit === cards[2].suit &&
            cards[0].suit === cards[3].suit &&
            cards[0].suit === cards[4].suit;

        //do the function cards AKQJ10==if the first card in the group starts with 10
        for (var key in groups) {
            //two cuz string to integer
            var isTen = key == 10;

            //making sure all requisites are passed 
            if (isTen && isFlush && positionZero === 0) {
                return true;
            }
            else {
                return false
            }
        }
    }



    function isStraightFlush(cards, groups) {
        if (isFlush() && isStraight()) {
            return true;
        }
        return false;
    }

    function isFourOfAKind(groups) {
        var names = Object.getOwnPropertyNames(groups);

        if (groupLength === 2) {
            return names.some(function (name) {
                return groups[name] === 4;
            })
        }
    }






    function isFullHouse(groups) {
        var names = Object.getOwnPropertyNames(groups);
        if (groupLength === 2) {
            return names.some(function (name) {
                return groups[name] === 3;
            })
        }
    }

    function isFlush(cards) {
       if(groupLength ===5 && 
        cards[0].suit===cards[1].suit &&
        cards[0].suit===cards[2].suit &&
        cards[0].suit===cards[3].suit &&
        cards[0].suit===cards[4].suit ){
            return true;
        }
        return false;
    };

        
            




    function isStraight(groups) {
        var names = Object.getOwnPropertyNames(groups)
        if (names[4] - names[0] === 4) {
            return true
        }

        if (names[0] == 2) {
            if (names[3] - names[0] === 3) {
                if(names[4]==14){
                    return true;

                }
               
            }

            return false
        }
    }

    function isThreeOfAKind(groups) {
        var names = Object.getOwnPropertyNames(groups)
        if (groupLength === 3) {
            return names.some(function (name) {
                return groups[name] === 3
            })
        }


    }

    function isTwoPair(groups) {

        var names = Object.getOwnPropertyNames(groups)
        if (groupLength === 3) {
            return names.some(function (name) {
                return groups[name] === 2
            })
        }
    }







    function isJacksOrBetter(groups) {
        var names = Object.getOwnPropertyNames(groups)
        if (groupLength === 4) {
            return names.some(function (name) {
                // console.log("name", name);
                if (name > 10) {
                    if (groups[name] === 2) {
                        return true;
                    }
                }
            })
        }
    }




    return Hand

})();