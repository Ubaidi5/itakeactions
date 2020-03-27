import React, { Component } from 'react';
import './recent-article-section.css';
class RecentArticle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="recent-article">
                <h1 className="recent-article-heading">Recent Articles</h1>
                <hr/><br/><br/>
                <div className="recent-article-image">
                    <div className="recent-article-image-left-section">
                        <h2>I Take Actions teams participates in Accountability Lab Incubators's Friendriaser event in Abuja Nigeria</h2>
                    </div>
                    <div className="recent-article-image-right-section">
                        <div className="upper-image-section">
                            <h2>How NGOs support Education</h2>
                        </div>
                        <div className="lower-image-section">
                            <h2>Kano State in Nigeria disburses N1.5 billion to support girls</h2>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
         );
    }
}
 
export default RecentArticle;