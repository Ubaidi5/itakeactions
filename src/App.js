import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/index/Header/header';
import Footer from './components/index/Footer/footer';
import Home from './components/home/home'
import TakeAction from './components/takeAction/takeaction';
import AboutUs from './components/about-us/about-us';
import ReportForm from './components/reports/report-form';
import Rewards from './components/reward/reward.js';
import RewardsIndividualPage from './components/reward/rewards-individual/rewards-individual-page';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/take-action" exact component={TakeAction} />
        <Route path="/submit-a-report" exact component={ReportForm} />
        <Route path="/reward" exact component={Rewards} />
        <Route path="/reward/rewards-individual" exact component={RewardsIndividualPage} />
        <Route path="/about-us" exact component={AboutUs} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
