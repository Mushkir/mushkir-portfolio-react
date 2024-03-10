import { Link } from "react-router-dom";

const TheNavBar = () => {
  return (
    <nav className=" bg-primary-blue flex justify-between items-center px-20 py-10">
      <div>
        <Link
          to={"/"}
          className=" text-main-heading-color text-3xl font-semibold"
        >
          Mohamed Mushkir
        </Link>
      </div>

      <div className="flex items-center gap-x-10 text-main-heading-color">
        <Link to={"/"} className="text-lg">
          Home
        </Link>
        <Link>About</Link>
        <Link>Experience</Link>
        <Link>Services</Link>
        <Link>Contact</Link>
        <Link className="text-aqua-color border border-aqua-color px-5 py-2 rounded-md hover:bg-aqua-color hover:text-primary-blue hover:transition 500">
          Resume
        </Link>
        <div className=" text-main-heading-color text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};
export default TheNavBar;
