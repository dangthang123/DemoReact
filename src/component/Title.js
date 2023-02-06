import React from 'react';
import '../css/Title.css';

export default function Title({ title, des }) {
    return (
        <div className="tille-container">
            <div className="tille-item">
                <h3 className="tille-item-2">{title}</h3>
                <h4 className="tille-item-1">{des}</h4>
                <hr className="tille-hr" />
            </div>
        </div>
    )
}