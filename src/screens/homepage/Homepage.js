import React from "react";
import Section1 from "../../screen-components/home/section1";
import Section2 from "../../screen-components/home/section2";
import Section3 from "../../screen-components/home/section3";
import Section4 from "../../screen-components/home/section4";

const Homepage = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Homepage;
