import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'



const Button = ({getThreeCards}) => {

    return (
        <div className='buttonDiv'>
            <p className='intentionText'>Get clarity on your <br/>P A S T  P R E S E N T  F U T U R E </p>
            <Link to="/pastpresentfuture"><button className='guidanceButton' onClick={getThreeCards}><strong>Get Your Spread</strong></button></Link>
        </div>
    );
};

export default Button;