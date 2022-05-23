import React from 'react';
import './Track.css';

export default class Track extends React.Component {
    renderAction() {
        this.pops.isRemoval ? 
            <button class="track-action">-</button> : 
            <button class="track-action">+</button> ;
    }
    
    render() {
        return (
        <div className="Track">
        <div className="Track-information">
            <h3>Track name</h3>
            <p>Track Artist| Track Album</p>
        </div>
        {this.renderAction}
        </div>
        )
    }
}