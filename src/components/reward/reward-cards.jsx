import React, { Component } from 'react';
import '../../styles/reward/reward-cards.css';
import selfieStick from './images/selfieStick.png';
import handfree from './images/handfree.png';
import { Link } from 'react-router-dom';

class RewardCards extends Component {

    render() { 
        return ( 
            <div className="reward-cards">
                <div className="reward-cards-wrapper">
                    <div className="reward-cards-wrapper-1">
                       <div className="reward-card">
                            <img src={selfieStick} alt="" className='reward-image'/>
                            <h4>Universal Smartphone Foldable Selfie Stick</h4>
                            <h5>50 ActBit coins required</h5>
                            <h5>Draw date: 09/30/2008</h5>
                            <Link to="/reward/rewards-individual">
                                <button className="btn view-rewards">VIEW DETAILS</button>
                            </Link>
                        </div>
                        <div className="reward-card">
                            <img src={selfieStick} alt="" className='reward-image'/>
                            <h4>Universal Smartphone Foldable Selfie Stick</h4>
                            <h5>50 ActBit coins required</h5>
                            <h5>Draw date: 09/30/2008</h5>
                            <Link to="/reward/rewards-individual">
                                <button className="btn view-rewards">VIEW DETAILS</button>
                            </Link>
                        </div>
                        <div className="reward-card">
                            <img src={selfieStick} alt="" className='reward-image' />
                            <h4>Universal Smartphone Foldable Selfie Stick</h4>
                            <h5>50 ActBit coins required</h5>
                            <h5>Draw date: 09/30/2008</h5>
                            <Link to="/reward/rewards-individual">
                                <button className="btn view-rewards">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>

                    <div className="reward-cards-wrapper-2">
                        <div className="reward-card">
                            <img src={handfree} alt="" className='reward-image'/>
                            <h4>Universal Smartphone Foldable Selfie Stick</h4>
                            <h5>50 ActBit coins required</h5>
                            <h5>Draw date: 09/30/2008</h5>
                            <Link to="/reward/rewards-individual">
                                <button className="btn view-rewards">VIEW DETAILS</button>
                            </Link>
                        </div>
                        <div className="reward-card">
                            <img src={handfree} alt="" className='reward-image'/>
                            <h4>Universal Smartphone Foldable Selfie Stick</h4>
                            <h5>50 ActBit coins required</h5>
                            <h5>Draw date: 09/30/2008</h5>
                            <Link to="/reward/rewards-individual">
                                <button className="btn view-rewards">VIEW DETAILS</button>
                            </Link>
                        </div>
                        <div className="reward-card">
                            <img src={handfree} alt="" className='reward-image' />
                            <h4>Universal Smartphone Foldable Selfie Stick</h4>
                            <h5>50 ActBit coins required</h5>
                            <h5>Draw date: 09/30/2008</h5>
                            <Link to="/reward/rewards-individual">
                                <button className="btn view-rewards">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="next-btns">
                    <buttons className='active' id='track'>1</buttons>
                    <buttons id='track'>2</buttons>
                    <buttons id='track'>3</buttons>
                </div>

            </div>
         );
    }
}
 
export default RewardCards;

