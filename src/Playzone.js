import { Component } from 'react'
import Deck from './Deck.js'
import './App.css'

export default class Playzone extends Component {
  
    constructor(props) {
        super(props);
        const deck = new Deck()
        deck.shuffle()

      // cut the deck into two halves. These should be global variables, so I'm not sure 
      // why I can't access them inside dealComputerCard() function below

        const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
        const playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
        const computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

        // console.log(deck)
        // console.log(computerDeck, playerDeck)

        // I will use these later once I set up scoring
        const CARD_VALUE_MAP = {
          "A": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
          "9": 9,
          "10": 10,
          "J": 11,
          "K": 12,
          "Q": 13
        }
        

        this.state = {
          // inRound: '',
          computerDealerCard: '',
          computerCardOne: '',
          computerCardTwo: '',
          computerCardThree: '',
          computerCardFour: '',
          computerCardFive: '',
          playerDealerCard: '',
          playerCardOne: '',
          playerCardTwo: '',
          playerCardThree: '',
          playerCardFour: '',
          playerCardFive: '',
        }
        
    }

    // when the user clicks on the deck, I want the top card to be moved to the 
    // computerDealerCard slot and display in the DOM

    dealComputerCard = () => {
      // this.inRound = true
      let dealtCard = this.computerDeck.pop()
      this.setState({
        computerDealerCard: dealtCard
        
      })
      console.log(this.computerDealerCard)
    }

    // will implement later
    isGameOver(deck) {
      return deck.numberOfCards === 0
    }

    render() {
      const computerDealerCard = this.state
        return (
            <div>
              <div className = "computer playspace">
              {/* This is where the deck is. I want to be able to click on it to deal a card */}
                <button className = "computer-deck deck" onClick = {() => this.dealComputerCard()} >
                  {/* <div ></div> */}
                </button>
                {/* This is where I want the card to render in this slot */}
                <div className = "computer-card-slot card-slot dealer-card-slot">
                  <div className = "card" data-value={computerDealerCard}>♠️</div>
                </div>
                <div className = "computer-card-slot card-slot card-slot-one"></div>
                <div className = "computer-card-slot card-slot card-slot-two"></div>
                <div className = "computer-card-slot card-slot card-slot-three"></div>
                <div className = "computer-card-slot card-slot card-slot-four"></div>
                <div className = "computer-card-slot card-slot card-slot-five"></div>
              </div>
              <div className = "common-space">
                <div className = "message"></div>
                <div className = "card-slot discard-pile"></div>
              </div>
              
              <div className = "player playspace">
                <div className = "player-deck deck"></div>
                <div className = "player-card-slot card-slot dealer-card-slot">
                  <div className = "card" data-value="9♣️">♣️</div>
                </div>
                <div className = "player-card-slot card-slot card-slot-one"></div>
                <div className = "player-card-slot card-slot card-slot-two"></div>
                <div className = "player-card-slot card-slot card-slot-three"></div>
                <div className = "player-card-slot card-slot card-slot-four"></div>
                <div className = "player-card-slot card-slot card-slot-five"></div>
              </div>
          
            </div>
        )

    } 
}
