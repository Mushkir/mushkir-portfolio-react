import "react-tooltip/dist/react-tooltip.css";
import HeroDetail from "../components/HeroDetail";
import AboutDetail from "../components/AboutDetail";
import TechStacks from "../components/TechStacks";
import ServicesInfo from "../components/ServicesDetail";
import TheFooterSection from "../components/Footer";
import TheFootNote from "../components/TheFootNote";
import taskList from "../data/taskList.json";
import TheProjectSection from "../components/TheProjectSection";

// import { Tooltip } from "react-tooltip";

const HomePage = () => {
  console.log(taskList[0].tasks.frontend);
  return (
    <div>
      <HeroDetail />

      <AboutDetail />

      <TechStacks />

      <ServicesInfo />

      <TheProjectSection />

      <TheFooterSection />

      <TheFootNote />
    </div>
  );
};

export default HomePage;
