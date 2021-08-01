import { Component } from 'react'
import Deck, { Card } from './Deck.js'

export default class Playzone extends Component {
    constructor(props) {
        super(props);
        const deck = new Deck()
        const card = new Card()
      
        
        console.log(deck)
    }

    render() {
        return (
            <div>
            <div className = "computer playspace">
            <div className = "computer-deck deck"></div>
            <div className = "computer-card-slot card-slot">
                
            </div>
          </div>
          <div className = "message"></div>
          <div className = "player playspace">
            <div className = "player-deck deck"></div>
            <div className = "player-card-slot card-slot"></div>
          </div>
          
            </div>
        )

    } 
}
