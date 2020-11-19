import React from "react";
import Header from "./components/layout/Header/header";
import FooterWrapper from "./components/layout/Footer/footer";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
//-------------------------------------------------
// Importing Screens
//-------------------------------------------------
import Homepage from "./screens/homepage/Homepage";
// import AboutUs from "./about-us/about-us";
// import TakeAction from "./takeAction/takeaction";
import RewardsWrapper from "./screens/rewards/Rewards";
// import RewardsIndividualPage from "./reward/rewards-individual/rewards-individual-page";
// import ReportForm from "./report/reward-form";
// import Report from "./report/UnauthReport";
// import ReportSubmitted from "./report/ReportSubmitted";
// import ResetPassword from "./ResetPassword";
// import EmailUnlogged from "./Unlogged/EmailUnlogged";
// import TwitterUnlogged from "./Unlogged/TwitterUnlogged";
// import PetitionUnlogged from "./Unlogged/PetitionUnlogged";
// import DonateUnlogged from "./Unlogged/DonateUnlogged";
// import SMSUnlogged from "./Unlogged/SMSUnlogged";
// import VoteUnlogged from "./Unlogged/VoteUnlogged";

const { Content } = Layout;

function Routes() {
  return (
    <Layout>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/take-action" exact component={TakeAction} /> */}
          <Route path="/reward" exact component={RewardsWrapper} />
          {/* <Route
            path="/reward/rewards-individual"
            exact
            component={RewardsIndividualPage}
          />
          <Route
            path="/submit-a-report"
            exact
            component={() =>
              this.state.authenticate ? <ReportForm /> : <Report />
            }
          />
          <Route path="/report-submitted" exact component={ReportSubmitted} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/email-logged" component={EmailUnlogged} />
          <Route path="/petition-logged" component={PetitionUnlogged} />
          <Route path="/twitter-logged" component={TwitterUnlogged} />
          <Route path="/donate-logged" component={DonateUnlogged} />
          <Route path="/sms-logged" component={SMSUnlogged} />
          <Route
            path="/vote-logged"
            component={() => <VoteUnlogged isopinion={false} />}
          />
          <Route
            path="/opinion-logged"
            component={() => <VoteUnlogged isopinion={true} />}
          />
          <Route path="/about-us" exact component={AboutUs} /> */}
        </Switch>
      </Content>
      <FooterWrapper />
    </Layout>
  );
}

export default Routes;
