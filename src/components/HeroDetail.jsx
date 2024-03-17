import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const HeroDetail = () => {
  return (
    <div className="bg-primary-blue px-5 md:px-20 pt-28 pb-28">
      <div className="md:flex gap-20 justify-between mt-12 md:mt-28">
        {/* Hero Details */}
        <div className="mb-10 sm:mb-5 md:mt-10">
          <div className="mb-2">
            <strong className="tracking-wider text-main-heading-color">
              Hello, It&apos;s me
            </strong>
          </div>

          <div className="mb-3">
            <strong className="text-main-heading-color text-3xl sm:text-4xl">
              <span className="text-aqua-color">M</span>ohamed{" "}
              <span className="text-aqua-color">M</span>
              ushkir
            </strong>
          </div>

          <div className="mb-3">
            <span className=" text-main-heading-color text-xl sm:text-2xl font-semibold">
              And I&apos;m a{" "}
              <span className="text-aqua-color">
                Passionate Full Stack Web Developer
              </span>
            </span>
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

          {/* Download Button */}
          <Link
            to={"src/assets/docs/Mushkir.pdf"}
            target="_blank"
            download
            className="w-full flex justify-center sm:justify-normal rounded-full sm:rounded-md items-center mt-5 text-aqua-color gap-2 sm:w-[220px] border-2 border-aqua-color px-5 py-2 hover:bg-aqua-color hover:text-primary-blue hover:font-semibold hover:transition 500"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <mask id="lineMdCloudDownloadLoop0">
                  <g fill="#fff">
                    <circle cx="12" cy="10" r="6"></circle>
                    <rect width="9" height="7" x="8" y="13"></rect>
                    <rect width="15" height="12" x="1" y="8" rx="6">
                      <animate
                        attributeName="x"
                        dur="15s"
                        repeatCount="indefinite"
                        values="1;0;1;2;1"
                      ></animate>
                    </rect>
                    <rect width="13" height="10" x="10" y="10" rx="5">
                      <animate
                        attributeName="x"
                        dur="19s"
                        repeatCount="indefinite"
                        values="10;9;10;11;10"
                      ></animate>
                    </rect>
                  </g>
                  <rect width="4" height="5" x="10" y="9"></rect>
                  <path d="M12 18L17 13H7L12 18Z">
                    <animateMotion
                      calcMode="linear"
                      dur="1.5s"
                      keyPoints="0;0.25;0.5;0.75;1"
                      keyTimes="0;0.1;0.5;0.8;1"
                      path="M0 0v1v-2z"
                      repeatCount="indefinite"
                    ></animateMotion>
                  </path>
                </mask>
                <rect
                  width="24"
                  height="24"
                  fill="currentColor"
                  mask="url(#lineMdCloudDownloadLoop0)"
                ></rect>
              </svg>
            </div>
            Download Resume
          </Link>
        </div>

        {/* Hero Image */}
        <div>
          <div className="w-[250px] h-[250px] mx-auto md:h-[300px] md:w-[300px] rounded-full border-4 border-aqua-color">
            <img
              src="src/assets/img/mushkir-image.JPG"
              alt="Mushkir Image / Mohamed Mushkir Image"
              className=" h-full w-full object-cover rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
