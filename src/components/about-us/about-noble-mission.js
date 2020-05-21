import React, { Component } from 'react';
import '../../styles/about-us/about-noble-mission.css';

class AboutNobleMission extends Component {
   
    render() { 
        return ( 
            <div className="about-noble-mission">
                <h1 className="noble-mission-heading">About Noble Missions</h1>
                <hr id="about-noble-mission-heading-divider"/>
                <p className='about-noble-mission-paragraph'>
                    Noble Missions is a tech non-profit based in Nigeria with support from volunteers all over 
                    the world. We envision a world where technology is available and accessible to all citizens 
                    to foster sustainable development and reduce hunger. We believe education is the key to all 
                    sustainable development and is the best weapon to reduce hunger. This is why we leverage 
                    technology to remove barriers and improve access to quality education in Africa.
                </p>
                <a href='#' id='noble-mission-page-btn'>VISIT NOBLE MISSIONS PAGE</a>
            </div>
         );
    }
}
 
export default AboutNobleMission;