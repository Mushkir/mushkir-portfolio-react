import { Link } from "react-router-dom";

const TheFootNote = () => {
  return (
    <div className=" bg-primary-blue p-4 text-center">
      <span className="text-lg text-main-heading-color ">
        Designed and Developed by:{" "}
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
  );
};

export default TheFootNote;
