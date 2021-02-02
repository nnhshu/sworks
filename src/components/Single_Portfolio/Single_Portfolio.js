import React from 'react';
import './Single_Portfolio.scss';

function Single_Portfolio ( {name, link_web, path_img, desc} ) {
    return(
        <div className="single_portfolio_part text-center">
            <a target="_blank" href={link_web} className="single_portfolio_img">
                <img src={path_img} className="img-fluid" />
            </a>
            <div className="single_portfolio_part__text">
                <h4>{name}</h4>
                <span className="d-block">{desc}</span>
            </div>
        </div>
    );
}

export default Single_Portfolio;