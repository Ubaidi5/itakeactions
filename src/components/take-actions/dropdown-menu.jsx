import React, { Component } from 'react';

import takeAction from './board.png';



class DropdownMenu extends Component {
    render() { 
       
        return ( 
            <div style={{width: '100%'}}>
                <div className="catlog" style={{backgroundImage: `url(${takeAction})`}}>
                        <h1 style={{color: '#FFF'}}>Take Actions to contribute to Nigeria's public education!</h1><br/>
                        <h3 style={{color: '#F3E404', fontWeight:'500'}}>You earn ActBit Coins for every action you take. <br/> Use the 
                        coins to enter to win rewards.</h3>
                </div>
                <div className="dropdown-menus">
              
                </div>
            </div>
         );
    }
}

export default DropdownMenu;