import React from 'react';
import './Icon_Box.scss';
import { FcCheckmark } from "react-icons/fc";

function IconBox ({name,desc}) {
    return(
        <div className="d-flex align-items-start mb-4 iconBox">
            <div className="mr-3"> 
                <FcCheckmark size="48" />
            </div>
            <div>
                <h6 className="mb-2">{name}</h6>
                <span className="mb-0">{desc}</span>
            </div>
        </div>
    );
}

export default IconBox;