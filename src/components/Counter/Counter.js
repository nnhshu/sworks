import React from 'react';
import './Counter.scss';

function Counter ( {number,text,path_img} ) {
    return(
        <div className="counterBox">
            <div className="d-flex align-items-center justify-content-center">
                <img src={path_img} className="mr-2" width="48" />
                <span className="counterBox-number display-4 text-dark" data-to="28" data-speed="700">{number}</span>
                <span className="display-4 text-dark">+</span> 
            </div>
            <h6 className="counterBox-text text-light mb-0">{text}</h6>
        </div>
    );
}

export default Counter;