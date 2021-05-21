import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'



const Button = ({getCards}) => {

    return (
        <div className='buttonDiv'>
            <h2 className='intentionText'>ask your question then...</h2>
            <Link to="/getyourcards"><button className='guidanceButton' onClick={getCards}>Get Your Guidance</button></Link>
        </div>
    );
};

export default Button;