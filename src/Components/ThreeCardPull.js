import React from 'react';
import './ThreeCardPull.css'
import { Link } from 'react-router-dom'

const ThreeCardPull = ({threeCards}) => {

    if (threeCards.length <1) {
        return (
            <Link to="/"><button className='returnHome'><strong>HOME</strong></button></Link>
        )
    }

    return (
        <div className='threeCardPullComponentDiv'>
            <Link to="/"><button className='returnHome'><strong>Get More Guidance</strong></button></Link>
            <div className='threeCardPullDiv'>
                <div><h3 className='clarity'>CLARITY ON THE PAST</h3></div>
                <div><h3 className='clarity'>CLARITY ON THE PRESENT</h3></div>
                <div><h3 className='clarity'>CLARITY ON THE FUTURE</h3></div>
                    {threeCards.map(card => (
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