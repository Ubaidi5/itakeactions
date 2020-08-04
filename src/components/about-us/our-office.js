import React, { Component } from "react";
import "../../styles/about-us/our-office.css";
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class OurOffice extends Component {
  render() {
    const styles = {
      iconStyles: {
        color: "black",
        fontSize: "40px",
        width: "55px"
      },
      link: {
        color: "black",
        fontSize: "20px",
        fontWeight: "450"
      }
    };

    // const MapComponent = withGoogleMap(props => (
    //   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    //   </GoogleMap>
    // ));

    return (
      <div className="our-office">
        <h1 className="our-office-heading">Our Office</h1>
        <hr id="our-office-heading-divider" />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {/* <MapComponent containerElement={ <div style={{ height: `400px`, width: '850px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> } /> */}
              <p>
                Noble Missions, C/O Accountability Lab, 4 Sefadu Close, Ademola
                Adetokunbo Crescent, Wuse II, Abuja, Nigeria.
              </p>
            </div>
            <div className="col-sm-3">
              <h5 style={{ color: "#057f16" }}>Get in touch with us!</h5>
              <br />
              <Link style={styles.link}>
                <i className="fa fa-phone-square" style={{...styles.link, fontSize:26}}></i>{" "}
                <span>+2348086628044</span>
              </Link>
              <br />
              <br />
              <Link style={styles.link}>
                <i class="fa fa-envelope" style={styles.link}></i>{"  "}
                info@itakeactions.org
              </Link>
              <br />
              <br />
              <Link>
                <i
                  className="fa fa-facebook-square"
                  aria-hidden="true"
                  style={styles.iconStyles}
                ></i>
              </Link>
              <Link>
                <i
                  className="fa fa-instagram"
                  aria-hidden="true"
                  style={styles.iconStyles}
                ></i>
              </Link>
              <Link>
                <i
                  className="fa fa-twitter-square"
                  aria-hidden="true"
                  style={styles.iconStyles}
                ></i>
              </Link>
              <Link>
                <i
                  className="fa fa-youtube-square"
                  aria-hidden="true"
                  style={styles.iconStyles}
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <br /><br />

        <MediaQuery maxDeviceWidth={1000}>
              <div style={{position:"relative",height:"10em"}}>
              <i className='fas fa-chevron-circle-up up-button-tablet-design' title="Go to top" onClick={()=>{window.scrollTo(0, 0);}} style={{position:"absolute",cursor: "pointer", top:"20%",left:"43%",display:"inline-block",margin:"10px auto",fontSize:"48px",borderRadius:"50%",border:"2px solid black",backgroundColor:"black",color:"white"}}></i>
              </div>
        </MediaQuery>
        
        
      </div>
    );
  }
}

export default OurOffice;
