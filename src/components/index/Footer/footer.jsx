import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    state = {  }
    render() { 
       
        return ( 
            <div className="footer">
                <div className="footer1">
                    <div className="section one">
                        <div className="section-one-content-wrapper">
                            <img src={require('./footer.png')} alt="iTakeAction"/>
                            <div className="contact">
                                <a href="#">CONTACT US</a>
                                <a href="#">TAKE ACTIONS</a>
                            </div>
                        </div>
                    </div>

                    <div className="section two">
                            <h2>Learn More</h2>
                            <a href="#">IMPACT</a>
                            <a href="#">PARTNERSHIP</a>
                            <a href="#">ARTICLE CONTRIBUTION</a>
                            <a href="#">FAQ</a>
                            <div className="subscribe">
                                <h3>SIGN UP TO OUR NEWSLETTER</h3>
                                <input type="text" placeholder="E-mail"/>
                                <button className="go">Go!</button>
                            </div>
                    </div>

                    <div className="section three">
                        <h2>SEE OUR NUMBERS</h2>
                        {/* <b>1390</b><span>Active Citizens</span><br/>
                        <b>1870</b><span>Actions Taken</span><br/>
                        <b>70</b><span>Campaigns</span><br/>
                        <b>344</b><span>Beneficiaries</span><br/>
                        <b>3344</b><span>Citizens we are Campaigning for</span> */}
                        <div className="sec-3-wrapper">
                            <div className="numbers">
                                <b>1390</b>
                                <b>1870</b>
                                <b>70</b>
                                <b>344</b>
                                <b>3344</b>
                            </div>
                            <div className="names">
                                <p>Active citizens</p>
                                <p>Actions Taken</p>
                                <p>Campaigns</p>
                                <p>Beneficiaries</p>
                                <p>Citizens we are Campaigning for</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer2">
                    <div className="ad">A program by Noble Mission</div>
                    <div className="auth-link">
                        <a href="#">AUTHOR LOGIN</a>
                        <a href="#">TERM OF USE</a>
                        <a href="#">PRIVACY</a>
                    </div>
                    <div className="follow">
                        <div className="follow-us">
                            <p>Follow us:</p>
                            <div className="fa-links">
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-twitter"></a>
                                <a href="#" className="fa fa-youtube"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="responsive-ad"><p>A program by Noble Mission</p></div>
            </div>
         );
    }
}
 
export default Footer;