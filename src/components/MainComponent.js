import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "../styles/main.css";
import Footer from './layout/Footer/footer';
import Header from './layout/Header/header';

import Home from './home/home';
import AboutUs from './about-us/about-us';
import TakeAction from './takeAction/takeaction';
import Rewards from './reward/reward.js';
import RewardsIndividualPage from './reward/rewards-individual/rewards-individual-page';
import ReportForm from './report/reward-form';
import Report from './report/UnauthReport';
import ReportSubmitted from './report/ReportSubmitted';
import ResetPassword from './ResetPassword';
import EmailUnlogged from './Unlogged/EmailUnlogged';
import TwitterUnlogged from './Unlogged/TwitterUnlogged';
import PetitionUnlogged from './Unlogged/PetitionUnlogged';
import DonateUnlogged from './Unlogged/DonateUnlogged';
import SMSUnlogged from './Unlogged/SMSUnlogged';
import VoteUnlogged from './Unlogged/VoteUnlogged';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticate:false
        }
    }
    render() { 
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/take-action" exact component={TakeAction} />
                    <Route path="/reward" exact component={Rewards} />
                    <Route path="/reward/rewards-individual" exact component={RewardsIndividualPage} />
                    <Route path="/submit-a-report" exact component={()=>this.state.authenticate?<ReportForm />:<Report />} />
                    <Route path="/report-submitted" exact component={ReportSubmitted} />
                    <Route path="/reset-password" exact component={ResetPassword} />
                    <Route path='/email-logged' component={EmailUnlogged} />
                    <Route path='/petition-logged' component={PetitionUnlogged} />
                    <Route path='/twitter-logged' component={TwitterUnlogged} />
                    <Route path='/donate-logged' component={DonateUnlogged} />
                    <Route path='/sms-logged' component={SMSUnlogged} />
                    <Route path='/vote-logged' component={()=> <VoteUnlogged isopinion={false} />} />
                    <Route path='/opinion-logged' component={()=> <VoteUnlogged isopinion={true} />} />
                    <Route path="/about-us" exact component={AboutUs} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
 
export default Main;