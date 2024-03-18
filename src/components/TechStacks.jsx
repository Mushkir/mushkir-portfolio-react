import HTMLIcon from "./Icons/HTMLIcon";
import CSSIcon from "./Icons/CSSIcon";
import JavaScriptIcon from "./Icons/JavaScript";
import BootstrapIcon from "./Icons/BootstrapIcon";
import TailwindCSSIcon from "./Icons/TailwindIcon";
import MongoDBIcon from "./Icons/MongoDBIcon";
import ExpressJsIcon from "./Icons/ExpressJsIcon";
import ReactJsIcon from "./Icons/ReactJsIcon";
import NodeJsIcon from "./Icons/NodeJsIcon";
import FirebaseIcon from "./Icons/FirebaseIcon";
import PHPIcon from "./Icons/PHPIcon";
import MySQLIcon from "./Icons/MySQLIcon";

const TechStacks = () => {
  return (
    <div
      className=" bg-primary-blue text-aqua-color px-5 md:px-20 py-20"
      id="stacks"
    >
      <h4
        className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Tech Stacks
      </h4>

      <div
        className="flex flex-wrap justify-center gap-10 items-center mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* HTML5 */}
        <HTMLIcon />

        {/* CSS3 */}
        <CSSIcon />

        {/* JavaScript */}
        <JavaScriptIcon />

        {/* Bootstrap */}
        <BootstrapIcon />

        {/* Tailwind CSS */}
        <TailwindCSSIcon />

        {/* MongoDB */}
        <MongoDBIcon />

        {/* Express.js */}
        <ExpressJsIcon />

        {/* React */}
        <ReactJsIcon />

        {/* Node.js */}
        <NodeJsIcon />

        {/* Firebase */}
        <FirebaseIcon />

        {/* PHP */}
        <PHPIcon />

        {/* MySQL */}
        <MySQLIcon />
      </div>
    </div>
  );
};

export default TechStacks;
