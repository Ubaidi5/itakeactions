import React, { Component } from 'react';
import './achivement.css'

class AchivementComponentTemplate extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="box">
                <p className="number">{this.props.number}</p>
                <p className="title">{this.props.title}</p>
            </div>
         );
    }
}
 
export default AchivementComponentTemplate;