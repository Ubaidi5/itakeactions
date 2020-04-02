import React, { Component } from 'react';
import Overview from './overview/overview'
import Achivements from './achivements/achivements'
import Section3 from './section3/section3';
import Section4 from './section4/secion4'
import Section5 from './section5/section5';
import RecentArticle from './Recent-Article-Section/recent-article-section';
import './home.css';

class Home extends Component {
    state = {  }
    render() { 
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
            </div>
         );
    }
}
 
export default Home;