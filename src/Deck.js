import React, { Component } from 'react'
import axios from 'axios'

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle'

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null
    }
  }

  render() {
    return (
      <div>
        <h1>Card dealer</h1>
      </div>
    )
  }
}

export default Deck
