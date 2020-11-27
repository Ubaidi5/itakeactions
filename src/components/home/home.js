import React from "react";
import Section4 from "./section4/secion4";
import Section5 from "./section5/section5";
import RecentArticle from "./Recent-Article-Section/recent-article-section";
import "../../styles/home/home.css";

function Home() {
  return (
    <div className="home">
      <Section4 />
      <Section5 />
      <RecentArticle />
    </div>
  );
}

export default Home;
