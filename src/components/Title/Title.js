import React from 'react';
import './Title.scss';


function Title ({ title, sub_title }) {
    return(
        <div className="title_page">
            <h2>{title}</h2>
            <p className="lead">{sub_title}</p>
        </div>
    );
}

export default Title;