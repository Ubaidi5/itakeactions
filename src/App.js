import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/index/Header/Header';
import Footer from './components/index/Footer/footer';
import Home from './components/home/home'
import AboutUs from './components/about-us/about-us';
import Rewards from './components/reward/reward.js';
import RewardsIndividualPage from './components/reward/rewards-individual/rewards-individual-page';
import TakeActions from './components/take-actions/take-action';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/take-action" exact component={TakeActions} />
        <Route path="/reward" exact component={Rewards} />
        <Route path="/reward/rewards-individual" exact component={RewardsIndividualPage} />
        <Route path="/about-us" exact component={AboutUs} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
