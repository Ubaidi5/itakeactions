import React, { Component } from 'react'
import AboutTheProgram from './about-the-program'
import OurCauses from './our-causes'
import OurPartners from './our-partners'
import OurOffice from './our-office';
import AboutNobleMission from './about-noble-mission'

class AboutUs extends Component{
    render(){
        return(
            <>
                <AboutTheProgram />
                <OurCauses />
                <AboutNobleMission />
                <OurPartners />
                <OurOffice />
            </>
        )
    }
}

export default AboutUs;