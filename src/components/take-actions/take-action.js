import React, {Component} from 'react';
import DropdownMenu from './dropdown-menu';
import ActionCards from './action-cards';


class TakeActions extends Component{
    render(){
        return(
            <div className='rewards'>
                <DropdownMenu />
                <ActionCards />
            </div>
        )
    }
}

export default TakeActions;

