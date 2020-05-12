import React, { Component } from 'react';
import '../../styles/about-us/about-the-program.css'

class AboutTheProgram extends Component {

    render() { 
        return ( 
            <div className="about-the-program">
                <h1 className="about-heading">About the program</h1>
                <hr id='about-heading-divider'/>
                <iframe title="I Take Actions" src="https://www.youtube.com/embed/5NQrNJrU3Vo" frameBorder='0' id='vedio-frame' width='800px' height='450px' style={{paddingBottom: 25}}></iframe>
                <p>Take Actions, a program by Noble Missions, is a community if active citizens taking actions for education.</p>
                <p>Any citizen of Nigeria is welcome to join the platform as an active citizen. Occasionally, we make calls for
                     actions on education issues. These calls could be to sign petitions, send emails, share tweets, support a case, 
                     vote on issues, to mention a few.</p>
                <p>We reward all citizen on the platform when they take actions with ActBit coins. ActBit coins is the platform's
                    digital currency, that when accumulated can be used to win rewards like event tickets, sales discount vouchers
                    and free gifts available on the platform
                </p>
            </div>
         );
    }           
}
 
export default AboutTheProgram;         