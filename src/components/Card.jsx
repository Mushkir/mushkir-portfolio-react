import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ heading, icon, navigate }) => {
  //
  return (
    <Link
      to={navigate}
      className="bg-primary-blue text-main-heading-color flex flex-col justify-center items-center p-5 rounded-md sm:w-[50%] sm:h-[200px] mb-5 hover:scale-[1.05] hover:transition 500 hover:bg-[#081426]"
    >
      {/* Icon */}
      <div>{icon}</div>
      <h5 className="sm:text-xl text-center mt-3 sm:mt-5">{heading}</h5>
    </Link>
  );
};

Card.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.element,
  navigate: PropTypes.string,
};

export default Card;