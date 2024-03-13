import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="space-y-5 w-full">
      {/* Email */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-10 text-lg">
        <strong className="text-main-heading-color">Email Address :</strong>
        <a
          href="mailto:mushkirmohamed@gmail.com"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          mushkirmohamed@gmail.com
        </a>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-20 text-lg">
        <strong className="text-main-heading-color">LinkedIn :</strong>
        <Link
          to={"https://www.linkedin.com/in/mohamed-mushkir/"}
          target="_blank"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          Mohamed Mushkir
        </Link>
      </div>

      {/* GitHub */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-24 text-lg">
        <strong className="text-main-heading-color">GitHub :</strong>
        <Link
          to={"https://github.com/Mushkir"}
          target="_blank"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          Mushkir
        </Link>
      </div>

      {/* Contact No. */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-[58px] text-lg">
        <strong className="text-main-heading-color">Contact No :</strong>
        <a
          href="tel:+94777195282"
          className=" text-secondary-font-color hover:underline hover:text-main-heading-color"
        >
          +94 77 719 5282
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
