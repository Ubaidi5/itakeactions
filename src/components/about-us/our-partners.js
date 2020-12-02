import React from 'react';
import '../../styles/about-us/our-partners.css'
import accountabilityLab from './images/Image20.png'
import truckLogo from './images/Image21.png'

const OurPartners = () => {
    return (
        <div className="our-partners">
                <h1 className="our-partners-heading">Our Partners</h1>
                <hr id="our-partners-heading-divider"/>
                
                <div className="testimonial-wrapper">

                    <div className="testimonial-for-partners">
                        <img src={accountabilityLab} alt="Image can not be displayed" id="our-partners-img-wrapper"/>
                        <h3 id="testimony-card-title">Accountability Lab</h3>
                    </div>

                    <div className="testimonial-for-partners">
                        <img src={truckLogo} alt="Image can not be displayed" id="our-partners-img-wrapper"/>
                        <h3 id="testimony-card-title">The Rular Care Initiative</h3>
                    </div>
                
                </div>

                <div className="request-partnership">
                    <h3>We welcome every opportunity to colloborate with others!</h3>
                    <a href='#' id='partnership-btn'>REQUEST PARTNERSHIP</a>
                </div>
                
            </div>
    );
}
 
export default OurPartners;
