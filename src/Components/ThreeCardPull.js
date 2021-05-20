import React from 'react';
import './ThreeCardPull.css'

const ThreeCardPull = () => {
    return (
        <div className='threeCardPullDiv'>
           <div className='threeCardPullCards'>
               <h3>Clarity on the Past</h3>
               <img />
               <p>Card Meaning here</p>
            </div > 
           <div className='threeCardPullCards'>
               <h3>Clarity on the Present</h3>
               <img />
               <p>Card Meaning here</p>
           </div>
           <div className='threeCardPullCards'>
               <h3>Clarity on the Future</h3>
               <img />
               <p>Card Meaning here</p>
           </div>
        </div>
    );
};

export default ThreeCardPull;