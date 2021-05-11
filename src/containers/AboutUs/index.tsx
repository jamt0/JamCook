import React from "react";
import { AboutUsView } from "layouts";
import useShowTabs from "hooks/useShowTabs";

const AboutUs: React.FC = () => {
  
  useShowTabs(false);

  return <AboutUsView />;
};

export default AboutUs;
