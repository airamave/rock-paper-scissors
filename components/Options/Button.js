import React from 'react';

const Button = ({ type, handler }) => {
    return (
        <button onClick={() => handler(type)} className={`button border-color-${type}`}><img src={`../../assets/images/${type}.png`}/></button>
    );
}

export default Button;