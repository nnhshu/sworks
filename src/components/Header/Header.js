import React, { useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineBars, AiOutlineClose } from "react-icons/ai";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link
} from "react-router-dom";

import './Header.scss';
import { NavItem } from './Nav';

function Header() {
    const [ scroll, setScorll ] = React.useState(false);
    const [expanded,isExpanded] = React.useState(false);
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200 ){
            setScorll(true);
        }
        else{
            setScorll(false);
        };
    };

    useEffect( () => {
        window.addEventListener('scroll',handleScroll);
    });
    /* Nav mobile */
    const handleToggle = (e) => {
        e.preventDefault();
        isExpanded(expanded => !expanded);
    }

    let navbarClasses=['site-header'];
    if(scroll){
        navbarClasses.push('fixed-header');
    }

    return (
        <>
            <header className={navbarClasses.join(" ")}>
                <div id="header-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col"> 
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <Link className="navbar-brand logo text-primary mb-0 font-w-7" to="/">
                                        Stheme<span className="text-dark font-w-4">works.</span>
                                    </Link>
                                    <div 
                                        className="menu-icon" 
                                        onClick={ (e) => isExpanded( expanded => !expanded )}
                                        data-toggle="collapse"
                                        aria-expanded="false" aria-label="Toggle navigation"
                                    >
                                        { 
                                            expanded ? <AiOutlineClose  size="24"  /> : <AiOutlineBars size="24"  />
                                        }
                                    </div>
                                    <div className={ !expanded ? 'navbar-collapse' : 'navbar-collapse active'}>
                                        <ul className="navbar-nav ml-auto mr-auto">
                                            {
                                                NavItem.map( (item,index) =>
                                                    <li className="nav-item" key={index}> 
                                                        <Link 
                                                            className="nav-link" 
                                                            activeClassName="nav-link--active"  
                                                            to={item.path}
                                                            onClick={ (e) => isExpanded( expanded => !expanded ) }
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="d-none d-sm-flex align-items-center justify-content-end">
                                        <a className="btn btn-primary btn-sm ml-3" href="tel:0975356819">+84 975356819</a> 
                                    </div>    
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
