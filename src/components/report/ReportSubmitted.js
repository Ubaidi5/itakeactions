import React from 'react';
import { Redirect } from 'react-router-dom';
// import LatestAction from '../home/section5/Latest-action-section/latest-action';
import TakeActions from '../Unlogged/TakeActions';

const ReportSubmitted = (props) => {
    // check if it was redirected with the user information, 
    // if the user directly tries to go this route he would be redirected to /submit-a-report 
    // if(!props.location.state) {
    //     return(
    //         <Redirect to="/submit-a-report" />
    //     );
    // }
    return (
        <div>
            <div>
            <div className="report-background" />
                <div className="report-content">
                    <h2>Your report has been successfully submitted!</h2>
                    <h5 style={{color:"white"}}>We will get in touch with you once we've reviewed your report.</h5>
                    <br />
                    <p className='text-success' style={{fontSize:20}}>You have earned 15 ActBit Coins</p>
                    <button style={{color:"white",border:"none", padding:"7px 30px", borderRadius:'5px', backgroundColor:"#057f16"}}>SEE MY WALLET</button>
                </div>
            </div>
            <div style={{padding:"75px 50px", backgroundColor:"rgba(255,255,255,0)"}}>
                <h4 style={{textAlign:'center',textDecorationLine:"underline"}}>Take More Actions</h4>
                <br /><br />
                <TakeActions display={true} />
                <br /><br />
                <div style={{textAlign:'center'}}>
                    <button style={{color:"white",border:"none", padding:"7px 30px", borderRadius:'5px', backgroundColor:"#057f16"}}>SEE MORE ACTIONS</button>
                </div>
            </div>
        </div>
    );
}

export default ReportSubmitted;