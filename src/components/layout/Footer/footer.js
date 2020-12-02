import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer1">
                <div className="section one">
                    <div className="section-one-content-wrapper">
                        <img src={require('./images/footer.png')} height={100} alt="iTakeAction"/>
                        <div className="mt-3 contact">
                            <Link>CONTACT US</Link>
                            <Link>TAKE ACTIONS</Link>
                        </div>
                    </div>
                </div>
    
                <div className="section two">
                        <h2 className="text-light font-weight-bold">Learn More</h2>
                        <Link>IMPACT</Link>
                        <Link>PARTNERSHIP</Link>
                        <Link>ARTICLE CONTRIBUTION</Link>
                        <Link>FAQ</Link>
                        <div className="subscribe">
                            <h5 className="font-weight-bold text-light">SIGN UP TO OUR NEWSLETTER</h5>
                            <input type="text" placeholder="E-mail"/>
                            <button className="go">Go!</button>
                        </div>
                </div>
    
                <div className="section three">
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