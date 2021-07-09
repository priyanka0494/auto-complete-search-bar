import React from 'react';
import './PillContainer.css';

function PillContainer({ key, movieTitle, removeMovie }) {
    return (
        <div className='pill-container'>
            <div className='pill-text' key={key}>{movieTitle}</div>
            <button className='pill-btn' onClick={() => removeMovie(movieTitle)}>x</button>
        </div>
    )
}

export default PillContainer
