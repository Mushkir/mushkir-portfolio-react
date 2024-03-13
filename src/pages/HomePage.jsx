import "react-tooltip/dist/react-tooltip.css";
import HeroDetail from "../components/HeroDetail";
import AboutDetail from "../components/AboutDetail";
import TechStacks from "../components/TechStacks";
import ServicesInfo from "../components/ServicesDetail";
// import { Tooltip } from "react-tooltip";

const HomePage = () => {
  return (
    <div>
      <HeroDetail />

      <AboutDetail />

      <TechStacks />

      <ServicesInfo />
    </div>
  );
};

export default HomePage;
