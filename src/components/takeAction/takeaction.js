import React, { Component } from 'react'

import "../../styles/take-actions/take-actions.css";
import TakeActions from '../Unlogged/TakeActions';

class TakeAction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            select:""
        }
    }
    render(){
        return(
            <div>
                <div className='imge-background'></div>
                <div className='imge-content'>
                    <h1 style={{color:"white", textAlign:'center'}}>Take Actions to contribute to Nigeria's public education!</h1>
                    <h4 style={{color:'yellow', textAlign:'center'}}>You earn ActBit Coins for every action you take.</h4>
                    <h4 style={{color:'yellow', textAlign:'center'}}>Use the coins to enter to win rewards.</h4>
                </div>
                <div style={{padding:"75px 50px"}}>
                    <div className='filter-by-drop-down'>
                        <select value={this.state.select} onChange={e=>this.setState({select:e.target.value})}>
                            <option value='Filter By'>Filter By</option>
                            <option value='Show all'>Show all</option>
                            <option value='Email'>Email</option>
                            <option value='Tweet'>Tweet</option>
                            <option value='Petition'>Petition</option>
                            <option value='Donate'>Donate</option>
                        </select>
                    </div>
                    <br /><br />
                    <TakeActions display={true}/>
                    <br /><br />
                    <br /><br />
                    <TakeActions display={true}/>
                    <br /><br />
                    <br /><br />
                    <TakeActions display={true}/>
                    <br /><br />
                    <div className="png-num">
                        <div style={{backgroundColor:'black'}}>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    <br /><br />
                </div>
            </div>
        );
    }
}

export default TakeAction;