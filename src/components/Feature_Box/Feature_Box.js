import React from 'react';
import ReactTooltip from 'react-tooltip';


import './Feature_Box.scss';

function Feature_Box ( {name, path_img, desc, number, className} ) {
    return(
        <div 
            className={ className ? `p-3 pt-4 feature-box className ${className}` : 'p-3 pt-4 feature-box'}
            data-tip={desc}
        >
            <ReactTooltip delayShow={200} />
            <div className="f-point">
                <h1>0{number}</h1>
            </div>
            <div className="feature-box__icon">
                <div className="feature-box__icon__img">
                    <img className="img-fluid" src={path_img} alt="" />
                </div>
                <h5 className="mt-4 mb-3">{name}</h5>
            </div>
        </div>
    );
}

export default Feature_Box;