import React, { Component } from 'react';
import './rewards-individual-page.css';
import petetionIcon from '../../home/section5/Latest-action-section/petition-icon-green.png';
import tweetIcon from '../../home/section5/Latest-action-section/tweet-icon-green.png';
import RewardsIndividualHeading from './reward-individual-heading';
import RewardDescription from './reward-description';
import RewardSpecification from './reward-specification';

class RewardsIndividualPage extends Component {
    render() { 
        return ( 
            <div className="rewards-individual-page" id="t">
                <div className="individual-reward-detail">
                    <RewardsIndividualHeading />
                    <RewardDescription />
                    <RewardSpecification />
                </div>
                
                <div className='tweet-section'>
                    <h2>Earn more ActBit Coins</h2>
                    <hr/><br/>
                    <div className="tweet-box-wrapper">
                                <div className="tweet-icon-box">
                                    <img src={tweetIcon} alt="" className="icon"/>
                                    <h3>Tweet</h3>
                                    <p>Thank president Muhammadu Buhari for deducting from Paris Club Refund to... <a href="#">Read more</a></p>
                                    <button className="tweet-card-btn">TWEET NOW</button>
                                </div>
                                <div className="tweet-icon-box">
                                    <img src={petetionIcon} alt="" className="icon"/>
                                    <h3>Petition</h3>
                                    <p>petitioning Niger State Governor to provide conducive learning environment... <a href="#">Read more</a></p>
                                    <button className="tweet-card-btn">SIGN PETITION</button>
                                </div>
                                <div className="tweet-icon-box">
                                    <img src={tweetIcon} alt="" className="icon"/>
                                    <h3>Tweet</h3>
                                    <p>Tell the leaderdhip of the National Assembly to urge all members to prioritize... <a href="#">Read more</a></p>
                                    <button className="tweet-card-btn">TWEET NOW</button>
                                </div>
                            </div>
                        <a href="#" id='more-action-btn'>SEE MORE ACTIONS</a>
                </div>
                <a href="#t" id='goto-top'>TOP</a>
            </div>
         );
    }
}
 
export default RewardsIndividualPage;