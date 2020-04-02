import React, { Component } from 'react';
import './section5.css'
import LatestAction from './Latest-action-section/latest-action';
import LatestReward from './Latest-reward-section/latest-reward';
import TweetSection from './Tweet-section/tweet-section';
class Section5 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='section5'>
                <div className="left-section">
                    
                    <LatestAction />
                    <br/><br/><br/>   {/*   we have 3 break tag here for spacing */}
                    <LatestReward />

                </div>
                
                <div className="right-section">
                  <h1>Citizens making an impact</h1><hr/>
                  <br/>
                  <TweetSection />
                </div>
            </div>
         );
    }
}
 
export default Section5;