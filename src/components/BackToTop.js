import React, {useEffect, useState} from 'react'
import {Arrow} from '../icons';

const BackToTop = () => {
    const [isUp, setIsUp] = useState(false);
    let lastScrollTop = 0;
    const handleScroll = () => {
        let st = document.body.scrollTop || document.documentElement.scrollTop;
        if(st < lastScrollTop) {
            setIsUp(true);
        }
        else {
            setIsUp(false);
        }
        lastScrollTop = st;
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return <a href="#!" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })} rel="nofollow" class={`back_to_top ${isUp ? 'active' : ''}`}>
        <i><Arrow/></i>
        <span>Top</span>
    </a>
}

export default BackToTop;