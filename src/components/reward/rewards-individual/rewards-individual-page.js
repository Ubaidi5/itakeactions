import React, { Component } from 'react';
import '../../../styles/reward/rewards-individual-page.css';
import MediaQuery from 'react-responsive';
import petetionIcon from '../../home/images/petition-icon-green.png';
import tweetIcon from '../../home/images/tweet-icon-green.png';
import RewardsIndividualHeading from './reward-individual-heading';
import RewardDescription from './reward-description';
import RewardSpecification from './reward-specification';

class RewardsIndividualPage extends Component {
    render() {
        function myFunc(e){
            e.preventDefault();
            var l = document.getElementsByClassName("rest-actions").length;
            var i = 0;
            while(i < l){
              document.getElementsByClassName("rest-actions")[i].style.display = "block";
              i++;
            }
        } 
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
                                <div className="tweet-icon-box rest-actions">
                                    <img src={petetionIcon} alt="" className="icon"/>
                                    <h5><strong style={{color:'black'}}>Petition</strong></h5>
                                    <p>petitioning Niger State Governor to provide conducive learning environment... <a href="#" className='text-success'>Read more</a></p>
                                    <button className="tweet-card-btn">SIGN PETITION</button>
                                </div>
                                <div className="tweet-icon-box rest-actions">
                                    <img src={tweetIcon} alt="" className="icon"/>
                                    <h5><strong style={{color:'black'}}>Tweet</strong></h5>
                                    <p>Tell the leaderdhip of the National Assembly to urge all members to prioritize... <a href="#" className='text-success'>Read more</a></p>
                                    <button className="tweet-card-btn">TWEET NOW</button>
                                </div>
                            </div>
                            <MediaQuery maxDeviceWidth={1000}>
                                <button className="more-actions-button mt-4 btn mybutton" onClick={myFunc}>SEE MORE ACTIONS</button>
                                <div style={{position:"relative",height:"10em"}}>
                                <i className='fas fa-chevron-circle-up up-button-tablet-design' title="Go to top" onClick={()=>{window.scrollTo(0, 0);}} style={{position:"absolute",cursor: "pointer", top:"20%",left:"43%",display:"inline-block",margin:"10px auto",fontSize:"48px",borderRadius:"50%",border:"2px solid black",backgroundColor:"black",color:"white"}}></i>
                                </div>
                            </MediaQuery>
                </div>
            </div>
         );
    }
}
 
export default RewardsIndividualPage;