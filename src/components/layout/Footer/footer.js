import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/footer.css';

function Footer() {
    return ( 
        <div className="footer">
            <div className="footer1">
                <div className="section one">
                    <div className="section-one-content-wrapper">
                        <img src={require('./images/footer.png')} alt="iTakeAction"/>
                        <div className="contact">
                            <Link>CONTACT US</Link>
                            <Link>TAKE ACTIONS</Link>
                        </div>
                    </div>
                </div>
    
                <div className="section two">
                        <h2>Learn More</h2>
                        <Link>IMPACT</Link>
                        <Link>PARTNERSHIP</Link>
                        <Link>ARTICLE CONTRIBUTION</Link>
                        <Link>FAQ</Link>
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
                    <Link>AUTHOR LOGIN</Link>
                    <Link>TERM OF USE</Link>
                    <Link>PRIVACY</Link>
                </div>
                <div className="follow">
                    <div className="follow-us">
                        <p style={{marginBottom:0,marginTop:0}}>Follow us:</p>
                        <div className="fa-links">
                            <Link><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
                            <Link><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                            <Link><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
                            <Link><i className="fa fa-youtube-square" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive-ad"><p>A program by Noble Mission</p></div>
        </div>
     );
}
 
export default Footer;