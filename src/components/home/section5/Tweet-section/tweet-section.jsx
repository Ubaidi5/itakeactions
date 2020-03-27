import React, { Component } from 'react';

class TweetSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tweet-wrapper">
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
                <div className="tweet-box">
                    <img src={require('./user.png')} alt="tweet"/>
                    <p>Susan R. tweeted "<strong>Tell the leadership of the assembly to urge..."</strong></p>
                </div>
            </div>
         );
    }
}
 
export default TweetSection;