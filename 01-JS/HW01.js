// Write a function that takes array of any number of cards (poker cards, 52 unique cards) and returns the number of complete decks we can make using those cards.


// returns number of complete decks that can be created with given cards
// if there is 52 different keys, find card with least number of occurences
function GetDeckAmt(cardOccurences){
    if(Object.keys(cardOccurences).length !== 52){
        return 'Cannot make a complete deck of cards.'
    }else{
        let amt = 0;
        let occurences = Object.values(cardOccurences);
        amt = Math.min(...occurences);
        return 'Number of complete decks is ' + amt;
    } 
}

//counts occurences of every existing card and stores them in an object (eg. {H1: 3, H2: 6, ..., D13: 2})
function CountCardOccurences(cards){
    var occurences = {};

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let index = card.suit + card.value;    //create unique property for card (eg. {suit: H, value: 7} -> 'H7')
        if(occurences[index]){
            occurences[index]++;
        }else{
            occurences[index] = 1;
        }    
    }

    return occurences;
}

    
//defining suits of cards (hearts, spades, clubs, diamonds) and card names
const suits = ['H', 'S', 'C', 'D'];
const cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cards = [];

//for each suit (H, S, C, D) and value pair (1-13) adds a card object between 0 and 100 times
suits.forEach((suit) => {
    for(let i = 1; i < 14; i++){
        const card = {'suit': suit, value: i, 'name': cardNames[i-1]};     

        let num = Math.floor(Math.random() * 101);
        for(let j = 0; j < num; j++){
            cards.push(card);
        }
    }
});

const cardOccurences = CountCardOccurences(cards);

console.log(GetDeckAmt(cardOccurences));



