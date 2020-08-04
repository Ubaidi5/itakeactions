import React, { Component } from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import MediaQuery from 'react-responsive';
import "../../styles/take-actions/take-actions.css";
import TakeActions from '../Unlogged/TakeActions';

class TakeAction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            select:"",
            title: "Filter By"
        }
    }

    onChangeHandler = async (e) => {
        await this.setState({select: e, title: e});
    }

    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={1000}>
            <div className="imge-background" />
                <div className="imge-content">
                    <h1 style={{color:"white", textAlign:'center'}}>Take Actions to contribute to Nigeria's public education!</h1>
                    <h4 style={{color:'yellow', textAlign:'center'}}>You earn ActBit Coins for every action you take.</h4>
                    <h4 style={{color:'yellow', textAlign:'center'}}>Use the coins to enter to win rewards.</h4>
                    
                </div>
                </MediaQuery>
    
            <MediaQuery maxDeviceWidth={999}>
                <div className="report-action-content-mobile">
                    <h1 style={{color:'white', textAlign: 'center'}}>Take Actions to contribute to Nigeria's public education!</h1>
                    <h4 style={{color:'yellow', textAlign:'center'}}>You earn ActBit Coins for every action you take.</h4>
                    <h4 style={{color:'yellow', textAlign:'center'}}>Use the coins to enter to win rewards.</h4>
                </div>
            </MediaQuery>
                
                <div style={{padding:"75px 50px"}}>

                    <DropdownButton className="customdropdown" onSelect={this.onChangeHandler} value={this.state.select} id="mycustomdropdown" title={this.state.title}>
                      <Dropdown.Item className="myclass" eventKey="Show all">Show all</Dropdown.Item>
                      <Dropdown.Item className="myclass" eventKey="Email">Email</Dropdown.Item>
                      <Dropdown.Item className="myclass" eventKey="Tweet">Tweet</Dropdown.Item>
                      <Dropdown.Item className="myclass" eventKey="Petition">Petition</Dropdown.Item>
                      <Dropdown.Item className="myclass" eventKey="Donate">Donate</Dropdown.Item>
                    </DropdownButton>
                    
                   
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