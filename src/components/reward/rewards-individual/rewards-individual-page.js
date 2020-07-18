import React, { Component } from 'react';
import '../../../styles/reward/rewards-individual-page.css';
import petetionIcon from '../../home/images/petition-icon-green.png';
import tweetIcon from '../../home/images/tweet-icon-green.png';
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
                    <h4>Earn more ActBit Coins</h4>
                    <hr/><br/>
                    <div className="tweet-box-wrapper">
                                <div className="tweet-icon-box">
                                    <img src={tweetIcon} alt="" className="icon"/>
                                    <h5><strong style={{color:'black'}}>Tweet</strong></h5>
                                    <p>Thank president Muhammadu Buhari for deducting from Paris Club Refund to... <a href="#" className='text-success'>Read more</a></p>
                                    <button className="tweet-card-btn">TWEET NOW</button>
                                </div>
                                <div className="tweet-icon-box">
                                    <img src={petetionIcon} alt="" className="icon"/>
                                    <h5><strong style={{color:'black'}}>Petition</strong></h5>
                                    <p>petitioning Niger State Governor to provide conducive learning environment... <a href="#" className='text-success'>Read more</a></p>
                                    <button className="tweet-card-btn">SIGN PETITION</button>
                                </div>
                                <div className="tweet-icon-box">
                                    <img src={tweetIcon} alt="" className="icon"/>
                                    <h5><strong style={{color:'black'}}>Tweet</strong></h5>
                                    <p>Tell the leaderdhip of the National Assembly to urge all members to prioritize... <a href="#" className='text-success'>Read more</a></p>
                                    <button className="tweet-card-btn">TWEET NOW</button>
                                </div>
                            </div>
                        <a href="#" id='more-action-btn'>SEE MORE ACTIONS</a>
                </div>
                <a href="#" id='goto-top'>TOP</a>
            </div>
         );
    }
}
 
export default RewardsIndividualPage;