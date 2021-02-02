import React,{useEffect} from 'react';
import Header from '../Header/Header';
import { MdTrendingFlat } from "react-icons/md";

function Page ({ children }) {
    const [scrolled,setScrolled] = React.useState(false);
    const handleScroll = () => {
        console.log('dad');
        const offset = window.scrollY;
        if(offset > 200 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }   
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        
    })
    const scollToTop = ['scroll-top'];
    if(scrolled){
        scollToTop.push('scroll-visible');
    }
    function scrollTop(e){
        e.preventDefault();
        const rootElement = document.documentElement;
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return(
        <>
            <Header />
            {children}  
            <div className={ scollToTop.join(" ") }>
                <a className="smoothscroll" href="#" onClick={scrollTop}><MdTrendingFlat size="24" /> Scroll Top</a>
            </div>  
        </>
    );
}

export default Page;