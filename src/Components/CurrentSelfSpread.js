import React from 'react';
import { Link } from 'react-router-dom'
import './CurrentSelfSpread.css'

const CurrentSelfSpread = ({fourCards}) => {
    return (
        <div>
            <Link to="/"><button className='returnHome'><strong>Get More Guidance</strong></button></Link>
            <div className='fourCardPullDiv'>
                <div><h3 className='balance'>Mental State</h3></div>
                <div><h3 className='balance'>Emotional State</h3></div>
                <div><h3 className='balance'>Physical State</h3></div>
                <div><h3 className='balance'>Advice for Balance</h3></div>
                    {fourCards.map(card => (
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

export default CurrentSelfSpread;