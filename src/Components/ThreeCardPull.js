import React from 'react';
import './ThreeCardPull.css'
import { Link } from 'react-router-dom'

const ThreeCardPull = ({cards}) => {

    console.log(cards)

    if (cards.length <1) {
        return (
            <Link to="/"><button className='returnHome'>HOME</button></Link>
        )
    }

    return (
        <div className='threeCardPullComponentDiv'>
            <Link to="/"><button className='returnHome'>Set Another Intention</button></Link>
            <div className='threeCardPullDiv'>
                <div><h3 className='clarity'>Clarity on the Past</h3></div>
                <div><h3 className='clarity'>Clarity on the Present</h3></div>
                <div><h3 className='clarity'>Clarity on the Future</h3></div>
                    {cards.map(card => (
                        <div className='threeCardPullCards'>
                            <h3>{card.name}</h3>
                            <img src={`https://www.sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg`}/>
                            <p>{card.meaning_up}</p>
                        </div > 
                    ))}
            </div>
        </div>
    );
};

export default ThreeCardPull;