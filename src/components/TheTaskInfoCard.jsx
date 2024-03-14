import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TheTaskInfoCard = ({
  description,
  githubUrl,
  imgUrl,
  liveUrl,
  techStacks,
  title,
  type,
}) => {
  return (
    <div className="z-0 relative w-full md:max-w-[350px]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="z-0 relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src={imgUrl}
          className=" w-full h-[300px] object-cover"
          alt={`${title}'s Screenshot`}
        />
      </div>

      <div className="p-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-Sen text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
        </div>

        {/* Description */}
        <p className="block font-Sen text-base antialiased font-light leading-relaxed text-gray-700">
          {description}
        </p>

        {/* Tech Stacks */}
        <div className="mt-3">
          <div className="mb-2">
            <strong>
              Category:{" "}
              <span>
                {type == "F"
                  ? "Frontend"
                  : type == "B"
                  ? "Backend"
                  : type == "F&B"
                  ? "Frontend and Backend"
                  : "Sorry! Invalid Criteria."}
              </span>
            </strong>
          </div>
          <div>
            <strong>
              Tech Stacks: <span>{techStacks}</span>
            </strong>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 flex items-center gap-5">
        <Link
          to={liveUrl}
          target="_blank"
          className="block w-full select-none rounded-lg bg-primary-blue hover:bg-[#222f44] py-3.5 px-7 text-center align-middle font-Sen text-sm text-white"
          type="button"
        >
          Live
        </Link>

        <Link
          to={githubUrl}
          target="_blank"
          className="block w-full select-none rounded-lg bg-gray-900 hover:bg-gray-800 py-3.5 px-7 text-center align-middle font-Sen text-sm text-white"
          type="button"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
};

TheTaskInfoCard.propTypes = {
  githubUrl: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  liveUrl: PropTypes.string,
  techStacks: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default TheTaskInfoCard;
