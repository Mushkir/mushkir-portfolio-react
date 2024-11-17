import { Link } from "react-router-dom";

const SocialLinks = () => {
  const handleContact = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="text-secondary-font-color text-3xl flex justify-center sm:justify-normal space-x-4"
    >
      {/* LinkedIn */}
      <Link
        to={"https://www.linkedin.com/in/mohamed-mushkir/"}
        target="_blank"
        className="hover:text-aqua-color hover:transition 500 md:hover:-translate-y-1"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          ></path>
        </svg>
      </Link>

      {/* GitHub */}
      <Link to={"https://github.com/Mushkir"} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="hover:text-aqua-color hover:transition 500 md:hover:-translate-y-1"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          ></path>
        </svg>
      </Link>
      {/* <Tooltip id="my-tooltip" /> */}

      {/* Instagram */}
      <Link to={"https://www.instagram.com/mushkir_9611/"} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          className="hover:text-aqua-color hover:transition 500 md:hover:-translate-y-1"
        >
          <path
            fill="currentColor"
            d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"
          ></path>
        </svg>
      </Link>

      {/* Call or Message or WhatsApp */}
      <Link onClick={handleContact} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className="hover:text-aqua-color hover:transition 500 md:hover:-translate-y-1"
        >
          <path
            fill="currentColor"
            d="m29.72 25.84l-7.13-7.13a.97.97 0 0 0-1.18-.14a6.2 6.2 0 0 0-2.7 3.43c-.23.72-1.07 1.05-1.72.66l-.01-.01l-.01-.01a22.2 22.2 0 0 1-7.61-7.61c0-.01-.01-.02-.01-.02c-.4-.65-.07-1.49.65-1.72a6.13 6.13 0 0 0 3.43-2.7c.23-.38.17-.86-.14-1.18L6.16 2.28a.97.97 0 0 0-1.18-.14a6.13 6.13 0 0 0-2.97 5.01v.01c-.01.1-.01.2-.01.3c0 .14.01.27.02.4a23.16 23.16 0 0 0 3.29 11.22c1.87 3.12 4.49 5.74 7.61 7.61l.01.01c3.44 2.07 7.36 3.2 11.37 3.29c.08 0 .16.01.24.01h.56v-.02a6.19 6.19 0 0 0 4.77-2.96c.22-.38.16-.87-.15-1.18"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SocialLinks;
