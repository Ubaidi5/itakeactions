import React, {Component} from 'react';
import DropdownMenu from './dropdown-menu';
import RewardCards from './reward-cards';


class Rewards extends Component{
    render(){
        return(
            <div className='rewards'>
                <DropdownMenu />
                <RewardCards />
            </div>
        )
    }
}

export default Rewards;