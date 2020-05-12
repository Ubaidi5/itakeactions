import React from 'react';
import { Redirect } from 'react-router-dom';
import LatestAction from '../home/section5/Latest-action-section/latest-action';

const ReportSubmitted = (props) => {
    // check if it was redirected with the user information, 
    // if the user directly tries to go this route he would be redirected to /submit-a-report 
    if(!props.location.state) {
        return(
            <Redirect to="/submit-a-report" />
        );
    }
    return (
        <div>
            <LatestAction />
            <button className="btn">SEE MORE ACTIONS</button>
        </div>
    );
}

export default ReportSubmitted;