import React from 'react';
import './css/SearchPage.css';
import logo from '../../img/logo.png';
import FooterBottom from '../Footer/FooterBottom';
export default function SearchBox() {
    return (
        <div>
            <div className="search-main">
                <img id="imgsearch" src={logo} alt=""></img>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search" required></input>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </div>
    )
}