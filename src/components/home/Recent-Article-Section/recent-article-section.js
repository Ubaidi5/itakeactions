import React, { Component } from "react";
import "../../../styles/home/recent-article-section.css";
import { Carousel } from "react-bootstrap";

class RecentArticle extends Component {
  render() {
    return (
      <div className="recent-article">
        <h1 className="recent-article-heading">Recent Articles</h1>
        <hr />
        <br />
        <br />
        {window.innerWidth>1300 && this.NormalView()}
        {window.innerWidth<=1300 && this.MobileView()}
        <br />
        <br />
      </div>
    );
  }
  NormalView() {
    return (
      <div className="recent-article-image">
        <div className="recent-article-image-left-section">
          <h2>
            I Take Actions teams participates in Accountability Lab Incubators's
            Friendriaser event in Abuja Nigeria
          </h2>
        </div>
        <div className="recent-article-image-right-section">
          <div className="upper-image-section">
            <h2>How NGOs support Education</h2>
          </div>
          <div className="lower-image-section">
            <h2>
              Kano State in Nigeria disburses N1.5 billion to support girls
            </h2>
          </div>
        </div>
      </div>
    );
  }
  MobileView() {
    return (
      <div>
      <Carousel controls={false} interval={3000}>
        <Carousel.Item>
          <div className="carousel-recent-articles article1">
            <h2 className="article-heading">
              I Take Actions teams participates in Accountability Lab
              Incubators's Friendriaser event in Abuja Nigeria
            </h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-recent-articles article2">
            <h2 className="article-heading">How NGOs support Education</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-recent-articles article3">
            <h2 className="article-heading">
              Kano State in Nigeria disburses N1.5 billion to support girls
            </h2>
          </div>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <div style={{position:"relative",height:"10em"}}>
          <i className='fas fa-chevron-circle-up up-button-tablet-design' title="Go to top" onClick={()=>{window.scrollTo(0, 0);}} style={{position:"absolute", cursor: "pointer",top:"20%",left:"43%",display:"inline-block",margin:"10px auto",fontSize:"48px",borderRadius:"50%",border:"2px solid black",backgroundColor:"black",color:"white"}}></i>
      </div>
      </div>
    );
  }
}

export default RecentArticle;
