import React, { Component } from 'react';

class RewardDescription extends Component {
    
    render() { 
        return ( 
            <div className="reward-description">
                <div className="draw-detail">
                    <ul className='detail-per-draw'>
                        <li>1</li>
                        <li>winner</li>
                        <li>per draw</li>
                    </ul>
                    <ul className='detail-per-draw'>
                        <li>11</li>
                        <li>days</li>
                        <li>to draw</li>
                    </ul>
                    <ul className='detail-per-draw'>
                        <li>1</li>
                        <li>reward</li>
                        <li>per winner</li>
                    </ul>
                </div>
                <div className="reward-detail">
                        <h4>Adamawa, Nigeria.</h4>
                        <h4>Draw date: 09/30/2018</h4>
                        <h4>50 ActBit Coins reqiured</h4>
                        <button href="#" className='login-btn-for-reward'>LOGIN TO ENTER REWARD</button>
                </div>
            </div>
         );
    }
}
 
export default RewardDescription;