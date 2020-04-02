import React, { Component } from 'react';
import './our-office.css'

class OurOffice extends Component {

    render() {

        return ( 
            <div className="our-office">
                <h1 className="our-office-heading">Our Office</h1>
                <hr id="our-office-heading-divider"/>
                <div className="get-in-touch">
            <div className="google-map"></div>
                    <div className="get-in-touch-with-us"></div>
                </div>
                <p>Noble Missions, C/O Accountability Lab, 4 Sefadu Close, Ademola Adetokunbo Crescent, 
                    Wuse II, Abuja, Nigeria.</p>
            </div>
         );
    }
}


export default OurOffice;