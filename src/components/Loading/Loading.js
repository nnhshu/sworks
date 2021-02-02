import React, { useState } from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="loader">
        <div className="loading-text-container ">
            <span className="loading-text">Load<strong>ing</strong></span> 
            <span className="loader_count">0</span>
        </div>
        <div className="loader-anim"></div>
        <div className="loader-anim2 color-bg"></div>
    </div>
  );
}

export default Loading;
