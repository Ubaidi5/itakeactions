import React, { Component } from 'react';
import './overview.css'
import Achivements from '../achivements/achivements';
class Overview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="extended">
                <div className="overview">
                    <div className="overview-social-links">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>

                    <div className="join">
                        <div className="paragraph">
                            <p>A community of active citizen taking actions for education</p>
                        </div>
                        <button className="joinCommunity-btn">JOIN THE COMMUNITY</button>
                    </div>
                </div>
            </div>
           
         );
    }
}
 
export default Overview;