import React from "react";
import AboutUsView from "pages/Profile/AboutUs/AboutUsView";
import useShowTabs from "hooks/useShowTabs";

const AboutUs: React.FC = () => {
  
  useShowTabs(false);

  return <AboutUsView />;
};

export default AboutUs;
