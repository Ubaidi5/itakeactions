import React from 'react';
import Overview from './overview/overview'
import Achivements from './achivements/achivements'
import Section3 from './section3/section3';
import Section4 from './section4/secion4'
import Section5 from './section5/section5';
import RecentArticle from './Recent-Article-Section/recent-article-section';
import '../../styles/home/home.css';
import Login from '../modals/LoginModal';
// import SignUp from '../modals/SignUpModal';

function Home() {
    return ( 
        <div className="home">
            <Overview />
            <div className="achive" align="center">
                <div className="achive-1st-child">   
                           <Achivements />     {/*Loading the achivements boxes */}
                </div> 
                <h1 className="our-participation"> We make it rewarding for you to participate in the development of public education in Nigeria.</h1>
            </div>
            
            <Section3 />
            <Section4 />
            <Section5 />
            <RecentArticle />
            <Login show={true} toggle={()=>console.log('toggled')}/>
            {/* <SignUp show={true} toggle={()=>console.log("toggled")}/> */}
        </div>
     );
}
 
export default Home;