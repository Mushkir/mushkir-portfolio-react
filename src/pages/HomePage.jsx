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
      {/* End of Tech Stacks */}

      {/* Services Div */}
      <div
        className="px-5 md:px-20 py-20 bg-secondary-font-color"
        id="services"
      >
        <h4 className="text-3xl text-center md:text-left font-semibold text-primary-blue mb-5">
          Services
        </h4>

        {/* Services */}
        <div className="sm:flex justify-center sm:gap-5 items-center">
          {/* Front-end Development */}
          <div className="bg-primary-blue text-main-heading-color flex flex-col justify-center items-center p-5 rounded-md sm:w-[50%] sm:h-[200px] mb-5">
            {/* Icon */}
            <div className="text-4xl sm:text-6xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6"></path>
                  <path d="m4.5 5.25l-1.75 1.5L4.25 8m5.5-2.5l1.5 1.25l-1.75 1.5m-3.25.5l1.5-4.5"></path>
                </g>
              </svg>
            </div>
            <h5 className="sm:text-xl text-center mt-3 sm:mt-5">
              Frontend Development
            </h5>
          </div>

          {/* Backend Development */}
          <div className="bg-primary-blue text-main-heading-color flex flex-col justify-center items-center p-5 rounded-md sm:w-[50%] sm:h-[200px] mb-5">
            <div className="text-4xl sm:text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#c4c7ce"
                  d="M8.562 15.256A21.159 21.159 0 0 0 16 16.449a21.159 21.159 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.357 10.357 0 0 1-2.084 1.076A22.293 22.293 0 0 1 16 12.078a22.36 22.36 0 0 1-7.879-1.3A10.28 10.28 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006m0 6.705a15.611 15.611 0 0 0 2.6.741a24.9 24.9 0 0 0 4.838.453a24.9 24.9 0 0 0 4.838-.452a15.614 15.614 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.706 10.706 0 0 1-1.692.825A23.49 23.49 0 0 1 16 18.74a23.49 23.49 0 0 1-8.271-1.348a10.829 10.829 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001M16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.487 23.487 0 0 1 16 25.445a23.422 23.422 0 0 1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30"
                ></path>
                <ellipse
                  cx="16"
                  cy="5.894"
                  fill="#c4c7ce"
                  rx="9.963"
                  ry="3.894"
                ></ellipse>
              </svg>
            </div>
            <h5 className="sm:text-xl text-center mt-3 sm:mt-5">
              Backend Development
            </h5>
          </div>

          {/* Custom Website Development */}
          <div className="bg-primary-blue text-main-heading-color flex flex-col justify-center items-center p-5 rounded-md sm:w-[50%] sm:h-[200px] mb-5">
            <div className="text-4xl sm:text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.65 15.65 0 0 0-1.38-3.56m7.91 12.81L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"
                ></path>
              </svg>
            </div>

            <h5 className="sm:text-xl text-center mt-3 sm:mt-5">
              Custom Website Development
            </h5>
          </div>

          {/* Web Application Development */}
          <div className="bg-primary-blue text-main-heading-color flex flex-col justify-center items-center p-5 rounded-md sm:w-[50%] sm:h-[200px] mb-5">
            <div className="text-4xl sm:text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </div>

            <h5 className="sm:text-xl text-center mt-3 sm:mt-5">
              Web Application Development
            </h5>
          </div>
        </div>
      </div>
      {/* End of Services Div */}
    </div>
  );
};

export default HomePage;
