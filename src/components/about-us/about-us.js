import React, {Component} from 'react'
import AboutTheProgram from './about-the-program.jsx'
import OurCauses from './our-causes.jsx'
import OurPartners from './our-partners.jsx'
import OurOffice from './our-office.jsx'
import AboutNobleMission from './about-noble-mission.jsx'

class AboutUs extends Component{
    render(){
        return(
            <React.Fragment>
                <AboutTheProgram />
                <OurCauses />
                <AboutNobleMission />
                <OurPartners />
                {/* <OurOffice /> */}
            </React.Fragment>
        )
    }
}

export default AboutUs;