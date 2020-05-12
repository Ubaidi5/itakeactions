import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/home/overview.css';
import Achivements from '../achivements/achivements';

function Overview() {
    return ( 
        <div className="extended">
            <div className="overview">
                <div className="overview-social-links">
                    <Link><i className="fa fa-facebook-square"></i></Link>
                    <Link><i className="fa fa-instagram"></i></Link>
                    <Link><i className="fa fa-twitter-square"></i></Link>
                    <Link><i className="fa fa-youtube-square"></i></Link>
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
 
export default Overview;