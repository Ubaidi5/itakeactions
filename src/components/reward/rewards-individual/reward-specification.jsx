import React, { Component } from 'react';
import broughtByNobleMissions from '../broughtByNobleMissions.jpg'
class RewardSpecification extends Component {

    render() { 
        return ( 
            <div className="reward-specification">
                <h3 id="specification-heading">Specification:</h3>
                <ul className="specifications">
                    <li>Functions: Passometer, Sleep Tracker</li>
                    <li>Message Remainder, Call Remainder, Push</li>
                    <li>Message, Alarm Clock, Week</li>
                    <li>Battery Capacity: 120-180mAh</li>
                    <li>RAM: 128MB</li>
                    <li>Waterproof Grade: Life Waterproof</li>
                    <li>Brand Material: Silica Gel</li>
                    <li>App Download Available: Yes</li>
                    <li>Style: Sport</li>
                    <li>Case Material: Alloy</li>
                    <li>Movement Type: Electronic</li>
                    <li>Display Size: 1.3inches</li>
                </ul>

                <h4 style={{}} id="brought-by">Brought By:</h4>
                <img src={broughtByNobleMissions} alt="Noble Missions" id="noble-mission-logo"/>
            </div>
         );
    }
}
 
export default RewardSpecification;