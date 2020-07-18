import React from 'react';
import '../../styles/report/unauth-report.css';

const Report = (props) => {
    return(
        <div className="report-container">
            <div className="report-background" />
            <div className="report-content">
                <h3>You need to login to submit a report</h3>
                <br />
                <button className="report-login-btn">LOGIN</button>
                Or
                <button className="report-signup-btn">SIGN UP</button>
            </div>
        </div>
    );
}
 
export default Report;