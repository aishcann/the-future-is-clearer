import React from 'react'
import Header from './Components/Header'
import Button from './Components/Button'
import ThreeCardPull from './Components/ThreeCardPull'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Button />
        <ThreeCardPull />
      </header>
    </div>
  );
}

export default App;
