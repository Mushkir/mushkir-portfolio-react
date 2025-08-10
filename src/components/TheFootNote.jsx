import { Link } from "react-router-dom";

const TheFootNote = () => {
  return (
    <div className="p-4 text-center  bg-primary-blue">
      <div>
        <span className="text-lg text-main-heading-color ">
          Copyright© - {new Date().getFullYear()} | Designed and Developed by:{" "}
          <Link
            to={"https://github.com/Mushkir/mushkir-portfolio-react"}
            target="_blank"
            className="font-normal hover:underline hover:font-semibold"
          >
            M.A. Mohamed Mushkir
          </Link>{" "}
          ❤️
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default TheFootNote;
