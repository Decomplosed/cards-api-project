import React, { Component } from 'react'
import axios from 'axios'

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/'

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      drawn: []
    }
    this.getCard = this.getCard.bind(this)
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
    this.setState({ deck: deck.data })
  }

  async getCard() {
    let deck_id = this.state.deck.deck_id
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`
      let cardRes = await axios.get(
        'https://deckofcardsapi.com/api/deck/ng054ddoc7ia/draw/'
      )

      if (cardRes.data.remaining === 0) {
        throw new Error('No card remaining')
      }
      console.log(cardRes.data)
      let card = cardRes.data.cards[0]
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} of ${card.value}`
          }
        ]
      }))
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <div>
        <h1>Card dealer</h1>
        <button onClick={this.getCard}>Get card!</button>
      </div>
    )
  }
}

export default Deck
