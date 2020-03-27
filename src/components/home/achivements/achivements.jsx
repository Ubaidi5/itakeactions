import React, { Component } from 'react';
import achivementData from './achivement-data'
import AchivementComponentTemplate from './achivement-component-template';

class Achivements extends Component {
    state = { achivedItems: achivementData }
    render() { 
        const items = this.state.achivedItems.map((item) => <AchivementComponentTemplate id={item.id} 
        number={item.number} title={item.title} />)
        return ( 
            <div className="achivement-component"> 
                {items}
            </div>
         );
    }
}
 
export default Achivements;