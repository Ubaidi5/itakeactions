import React, { Component } from 'react';
import './section4.css'
class Section4 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='section4'>
                <div className='report-issue'>
                    <h1 className='spacing'>Do you know any public school that is in a bad condition?</h1>
                    <p className='spacing'>or you have a personal experience about an education related issue?</p>
                    <button className="spacing report-issue-btn" >REPORT TO AMPLIFY IT HERE</button>
                </div>
            </div>
         );
    }
}
 
export default Section4