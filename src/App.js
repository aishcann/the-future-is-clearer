import React, {useState} from 'react'
import Header from './Components/Header'
import ThreeCardsButton from './Components/ThreeCardsButton'
import FourCardsButton from './Components/FourCardsButton'
import ThreeCardPull from './Components/ThreeCardPull'
import './App.css'
import { Link, Route } from 'react-router-dom'
import CurrentSelfSpread from './Components/CurrentSelfSpread'

function App() {

const [threeCards, setThreeCards] = useState([])

const [fourCards, setFourCards] = useState ([])


function getThreeCards () {
  const url = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'

  fetch(url)
    .then(res => res.json())
    .then(res => {
      setThreeCards(res.cards)
    })
    .catch (console.error)
}

function getFourCards () {
  const url = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=4'

  fetch(url)
    .then(res => res.json())
    .then(res => {
      setFourCards(res.cards)
    })
    .catch (console.error)
}

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Route path='/'exact render={() => <ThreeCardsButton getThreeCards={getThreeCards} setThreeCards={setThreeCards}/>} />
        <Route path='/'exact render={() => <FourCardsButton getFourCards={getFourCards} setFourCards={setFourCards}/>} />
        <Route path='/pastpresentfuture' render={(routerProps) => <ThreeCardPull threeCards={threeCards} setThreeCards={setThreeCards}/>} />
        <Route path='/balance' render={(routerProps) => <CurrentSelfSpread fourCards={fourCards} getFourCards={getFourCards}/>} />
      </header>
    </div>
  );
}

export default App;
