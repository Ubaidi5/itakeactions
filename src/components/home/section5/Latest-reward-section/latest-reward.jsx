import React, { Component } from 'react';

class LatestReward extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="latest-rewards">
                <h1>Latest Rewards</h1>
                <hr/><br/>
                <div className="box-wrapper">
                    <div className="image-box">
                        <img src={require('./GLO.jpg')} alt="" className="image"/>
                        <h4>GLO 500 Recharge</h4>
                        <h3>15</h3>
                        <button className="btn view-rewards">VIEW REWARDS</button>
                    </div>
                    <div className="image-box">
                        <img src={require('./Airtel.jpg')} alt="" className="image"/>
                        <h4>AIRTEL 500 Recharge</h4>
                        <h3>15</h3>
                        <button className="btn view-rewards">VIEW REWARDS</button>
                    </div>
                    <div className="image-box">
                        <img src={require('./mtncard.jpg')} alt="" className="image"/>
                        <h4>MTN 500 Recharge</h4>
                        <h3>15</h3>
                        <button className="btn view-rewards">VIEW REWARDS</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LatestReward;