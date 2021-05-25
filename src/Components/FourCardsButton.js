import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'



const Button = ({getFourCards}) => {

    return (
        <div className='buttonDiv'>
            <p className='intentionText'>Evaluate your <br />M I N D  B O D Y  S P I R I T</p>
            <Link to="/balance"><button className='guidanceButton' onClick={getFourCards}><strong>Get Your Spread</strong></button></Link>
        </div>
    );
};

export default Button;