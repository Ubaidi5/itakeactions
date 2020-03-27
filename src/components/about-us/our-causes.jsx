import React, { Component } from 'react';
import './our-causes.css';
import students from './students.png'
import hands from './hands.png';
import fog from './fog.png';
import megaphone from './megaphone.png';

class OurCauses extends Component {

    render() { 
        return ( 
            <div className="our-causes">
                <h1 className="our-causes-heading">Our Causes</h1>
                <hr id="our-causes-divider"/>
                <div className="our-causes-cards-wrapper">
    {/* CARDS */}
                    <div className="card-wrapper">
                        <div className="img-wrapper" style={{backgroundImage: `url(${students})`}}><p id='card-promotion-text'>Advancing Quality Education</p></div>
                        <p>Education in Nigeria is far below the expected standard and cannot be effectively
                            used as a weapon in the fight against poverty. This is why we have channeled our 
                            nergies to improving the quality of education in Nigeria.
                        </p>
                    </div>

                    <div className="card-wrapper">
                        <div className="img-wrapper" style={{backgroundImage: `url(${hands})`}}><p id='card-promotion-text'>Promoting Active Citizenship in Education</p></div>
                        <p>By creating opportunities for citizens to take actions and rewarding these actions, we encourage citizens 
                            to become conscious about education issues and actively contribute to providing solutions to the many problems
                            in the sector as an active citizen.
                        </p>
                    </div>

                    <div className="card-wrapper">
                        <div className="img-wrapper" style={{backgroundImage: `url(${fog})`}}><p id='card-promotion-text'>Promoting Government’s Accountability in Education</p></div>
                        <p>The overall responsibility to provide quality education lies with the government. Unfortunately, 
                            the government has not been open to citizens, making it difficult for citizens to engage the
                            government constructivelt. I Take Actions is designed to bridge the gap.
                        </p>
                    </div>
                    <div className="card-wrapper">
                        <div className="img-wrapper" style={{backgroundImage: `url(${megaphone})`}}><p id='card-promotion-text'>Amplifying Voices for Education</p></div>
                        <p>Nigeria has 774 local government areas with several communities within each of the local government area. 
                            The schools in most of these communities are decaying. We support these communities by amplifying 
                            their voices to get the government’s attention.
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default OurCauses;