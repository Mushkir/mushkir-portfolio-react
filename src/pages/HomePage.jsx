import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import SocialLinks from "../components/SocialLinks";
import HTMLIcon from "../components/Icons/HTMLIcon";
import CSSIcon from "../components/Icons/CSSIcon";
import JavaScriptIcon from "../components/Icons/JavaScript";
import BootstrapIcon from "../components/Icons/BootstrapIcon";
import TailwindCSSIcon from "../components/Icons/TailwindIcon";
import MongoDBIcon from "../components/Icons/MongoDBIcon";
import ExpressJsIcon from "../components/Icons/ExpressJsIcon";
import ReactJsICon from "../components/Icons/ReactJsIcon";
import NodeJsIcon from "../components/Icons/NodeJsIcon";
import FirebaseIcon from "../components/Icons/FirebaseIcon";
import PHPIcon from "../components/Icons/PHPIcon";
import MySQLIcon from "../components/Icons/MySQLIcon";
// import { Tooltip } from "react-tooltip";

const HomePage = () => {
  return (
    <div>
      <div className="bg-primary-blue px-5 md:px-20 py-10 pt-20">
        <div className="md:flex justify-between mt-12 md:mt-28">
          {/* Hero Details */}
          <div className="mb-5 md:mt-10">
            <div className="mb-2">
              <h4 className=" text-aqua-color">A passsionate</h4>
            </div>

            <div className="mb-3">
              <strong className=" text-main-heading-color text-4xl">
                Full-Stack Web Developer
              </strong>
            </div>

            <div className="mb-5">
              <p className=" text-secondary-font-color">
                I am interested in working on challenging web-based applications
                or projects, as well as utilizing my development knowledge to
                provide solutions for clients.
              </p>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Hero Image */}
          <div>
            <div className="md:h-[600px] md:w-[500px]">
              <img
                src="src/assets/img/mushkir.png"
                alt="Mushkir Image / Mohamed Mushkir Image"
                className=" h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Div */}
      <div className="px-5 md:px-20 py-20 bg-secondary-font-color" id="about">
        <h4 className="text-center md:text-left text-3xl font-semibold text-primary-blue mb-5">
          About
        </h4>

        <div>
          <p className=" text-justify text-lg text-[#222f44]">
            A Dedicated and Creative Web Designer and Developer with 06 months
            of Experience in Conceptualing, Designing, and Implementing visually
            applealing and User-friendly websites. Proficient in{" "}
            <Link
              to={
                "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,Web%20Consortium%20(W3C)%20recommendation."
              }
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              HTML,
            </Link>{" "}
            <Link
              to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              CSS,
            </Link>{" "}
            <Link
              to={
                "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
              }
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              JavaScript
            </Link>{" "}
            and{" "}
            <Link
              to={
                "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
              }
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              Responsive Designs
            </Link>
            . Experience in{" "}
            <Link
              to={"https://www.coursera.org/articles/mern-stack"}
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              MERN
            </Link>{" "}
            stack such as{" "}
            <Link
              to={"https://www.mongodb.com/"}
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              MongoDB
            </Link>
            ,{" "}
            <Link
              to={
                "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
              }
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              Express.js,
            </Link>{" "}
            <Link
              to={"https://react.dev/"}
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              React.js,
            </Link>{" "}
            <Link
              to={"https://www.w3schools.com/nodejs/nodejs_intro.asp"}
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              Node.js
            </Link>{" "}
            and Other stacks such as{" "}
            <Link
              to={"https://www.php.net/manual/en/intro-whatis.php"}
              target="_blank"
              className=" text-primary-blue hover:underline font-semibold"
            >
              PHP
            </Link>
            .
          </p>
        </div>
      </div>
      {/* End of About Div */}

      {/* Tech stacks Div */}
      <div
        className=" bg-primary-blue text-aqua-color px-5 md:px-20 py-20"
        id="stacks"
      >
        <h4 className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-5">
          Tech Stacks
        </h4>

        <div className="flex flex-wrap justify-center gap-10 items-center mt-5">
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
          <ReactJsICon />

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
    </div>
  );
};

export default HomePage;
