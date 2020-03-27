import React, { Component } from 'react';
import selfieStick from '../selfieStick.png'

class RewardsIndividualHeading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="rewards-individual-heading">
                <h1>Universal Smartphone Foldable Selfie Stick</h1>
                <div className="reward-image-wrapper"><img src={selfieStick} /></div>
                
            </div>
         );
    }
}
 
export default RewardsIndividualHeading;