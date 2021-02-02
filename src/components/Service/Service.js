import React from 'react';
import './Service.scss';

function Service_Item ({icon,name,desc}) {
    return(
        <div className="p-5 feature-hover position-relative">
            <div className="feature-icon"> 
                <img src={ icon } />
            </div>
            <h5 className="mt-4 mb-3">{name}</h5>
            <p className="mb-0">{desc}</p>
        </div>   
    );
}

export default Service_Item;