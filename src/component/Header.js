import React, { useEffect, useState } from 'react';
import '../css/Header.css';
import HeaderBottom from './Header/HeaderBottom';
import HeaderTop from './Header/HeaderTop';
export default function Header() {
    const [scrollDirection, setScrollDirection] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            setScrollDirection(window.scrollY > 40);
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);
    return (
        <header>
            <HeaderTop />
            <HeaderBottom scrollDirection={scrollDirection} />
        </header>

    )
}