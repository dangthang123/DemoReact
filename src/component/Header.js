import React from 'react';
import '../css/Header.css';
import HeaderBottom from './Header/HeaderBottom';
import HeaderTop from './Header/HeaderTop';
export default function Header() {
    return (
        <header>
            <HeaderTop />
            <HeaderBottom />
        </header>

    )
}