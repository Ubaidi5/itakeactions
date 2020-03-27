import React, { Component } from 'react';
import './section3.css'
class Section3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='this must be delete'>
        <div className='section3'>
            <div className="sec first" >
                <img src={require('./take-action.png')} alt="hand tool"/>
                <h3>Take Actions</h3>
                <p>Join the community and start taking actions to improve public education in Nigeria.</p>
            </div>
            <div className="sec second" >
                <img src={require('./get-reward.png')} alt="hand tool"/>
                <h3>Get Rewards</h3>
                <p>You earn ActBit coins for every action you take. Use the coin to enter to win rewards.</p>
            </div>
            <div className="sec third" >
                <img src={require('./see-impact.png')} alt="hand tool"/>
                <h3>See Impact</h3>
                <p>Follow us to see how your actions are making impact in the lives of millions of Nigerians.</p>
            </div>
        </div>
        <div className='learn-more'>
                <button className='green-center-btn'>LEARN MORE ABOUT US</button>
            </div>
        </div>
        );
    }
}
 
export default Section3;