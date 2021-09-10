import React from 'react';

const Score = (props) => {
    return (
        <div>
        <p>Scored <span className="score">{props.score}</span> on {props.date}</p>
        </div>
    );
};

export default Score;