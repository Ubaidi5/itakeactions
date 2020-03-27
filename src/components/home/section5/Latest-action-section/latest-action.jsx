import React, { Component } from 'react';

class LatestAction extends Component {
    state = {  }
    render() { 
        return ( 
            
                <div className="latest-actions">
                            <h1>Latest Actions</h1>
                            <hr/><br/>
                            <div className="box-wrapper">
                                <div className="icon-box">
                                    <img src={require('./tweet-icon-green.png')} alt="" className="icon"/>
                                    <h3>Tweet</h3>
                                    <p>Thank president Muhammadu Buhari for deducting from Paris Club Refund to... <a href="#">Read more</a></p>
                                    <button className="btn tweet">TWEET NOW</button>
                                </div>
                                <div className="icon-box">
                                    <img src={require('./petition-icon-green.png')} alt="" className="icon"/>
                                    <h3>Petition</h3>
                                    <p>petitioning Niger State Governor to provide conducive learning environment... <a href="#">Read more</a></p>
                                    <button className="btn petition">SIGN PETITION</button>
                                </div>
                                <div className="icon-box">
                                    <img src={require('./tweet-icon-green.png')} alt="" className="icon"/>
                                    <h3>Tweet</h3>
                                    <p>Tell the leaderdhip of the National Assembly to urge all members to prioritize... <a href="#">Read more</a></p>
                                    <button className="btn tweet">TWEET NOW</button>
                                </div>
                            </div>
                    </div>
            
         );
    }
}
 
export default LatestAction;