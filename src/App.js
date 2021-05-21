import React, {useState} from 'react'
import Header from './Components/Header'
import Button from './Components/Button'
import ThreeCardPull from './Components/ThreeCardPull'
import './App.css'
import { Link, Route } from 'react-router-dom'

function App() {

const [cards, setCards] = useState([])


function getCards () {
  const url = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'

  fetch(url)
    .then(res => res.json())
    .then(res => {
      setCards(res.cards)

    })
    .catch (console.error)
}

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Route path='/'exact render={() => <Button getCards={getCards} setCards={setCards}/>} />
        <Route path='/getyourcards' render={(routerProps) => <ThreeCardPull cards={cards} setCards={setCards}/>} />
      </header>
    </div>
  );
}

export default App;
