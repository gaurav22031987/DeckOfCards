import mongoose from 'mongoose';
export default class CarsModel {
    constructor() {
    }

    deckCards = new Array();

    getData = () => {
        let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let suits = ['Heart', 'Diamond', 'Club', 'Spade'];
        suits.forEach(suit => {
            cards.forEach(card => {
                if ((card > 10) || card === 1) {
                    card = this.getTypeofCard(card);
                }
                this.deckCards.push({ "suit": suit, "card": card.toString() });
            })
        });
    };

    getTypeofCard = (number) => {
        switch (number) {
            case 11: {
                return "J";
                break;
            }
            case 12: {
                return "Q";
                break;
            }
            case 13: {
                return "K";
                break;
            }
            default: {
                return "A";
                break;
            }
        }
    };

    removeCardFromDeck = (cardInfomation) => {
        this.deckCards = this.deckCards.filter(function (obj) {
            return (obj.suit != cardInfomation.suit || obj.card != cardInfomation.card);
        });
    }

    getAllSuite = () => {
        return ['Heart', 'Diamond', 'Club', 'Spade'];
    };

    getAll = () => {
        if (!this.deckCards.length) {
            this.getData();
        }
        return this.deckCards;
    };
}