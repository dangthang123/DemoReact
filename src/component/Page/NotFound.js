import React from 'react';
import './css/NotFound.css';
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='notfound container'>
            <h2 className='number-404'>404</h2>
            <p className='text-notfound'>Page not found</p>
            <Link to='/' className='notfound-home'><i className="fa-solid fa-house" style={{ marginRight: '10px' }}></i>Go to home page</Link>
        </div>
    );
}

export default NotFound;