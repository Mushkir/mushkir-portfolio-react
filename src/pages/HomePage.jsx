import "react-tooltip/dist/react-tooltip.css";
import HeroDetail from "../components/HeroSection/HeroDetail";
import AboutDetail from "../components/AboutDetailsSection/AboutDetail";
import TechStacks from "../components/TechStacks";
import ServicesInfo from "../components/ServicesDetail";
import TheFooterSection from "../components/Footer";
import TheFootNote from "../components/TheFootNote";
import TheProjectSection from "../components/TheProjectSection";
import TheHeaderProgressBar from "../components/HeaderProgressBar/TheHeaderProgressBar";
import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

const HomePage = () => {
  return (
    <div>
      {/* Form Frame-Motion Library */}
      <TheHeaderProgressBar />

      <HeroDetail />

      <AboutDetail />

      <TechStacks />

      <ServicesInfo />

      <TheProjectSection />

      <TheFooterSection />

      <TheFootNote />

      <FloatingWhatsApp
        phoneNumber="+94777195282"
        accountName="Mushkir"
        avatar={`${`https://github.com/Mushkir`}.png`}
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you today?"
        darkMode={true}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationSound={true}
      />
    </div>
  );
};

export default HomePage;
