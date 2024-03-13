import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormComponents/FormInput";
import FormTextArea from "./FormComponents/FormTextArea";

const TheFooterSection = () => {
  const form = useRef();

  console.log();

  const sendEmail = (e) => {
    e.preventDefault();

    const viewerNameEl = e.target[0].value;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert(
            `Dear ${viewerNameEl}! Your message has been sent to Mushkir's (my) Email.
            Thank you for Exploring My Portfolio.`
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className=" bg-primary-blue text-aqua-color px-5 md:px-20 py-20"
      id="contact"
    >
      <h4 className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-5">
        Contact
      </h4>
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <FormInput
          type="text"
          id="user_name"
          label="Name"
          placeholder="Enter you name"
        />

        <FormInput
          type="email"
          id="user_email"
          label="Email"
          placeholder="Enter your Email"
        />

        <FormTextArea name="message" placeholder="Enter your message" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center w-28 justify-center gap-1 bg-secondary-font-color text-primary-blue pl-3 pr-5 py-2 rounded-md cursor-pointer hover:bg-[#7a84a1] mt-5 hover:font-semibold"
          >
            {/* Send Icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="m21.433 4.861l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-2.074 2.073a.5.5 0 0 1-.853-.354v-4.519L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5a1 1 0 0 1 1.181 1.329ZM19 6.001L8.032 13.152l1.735 1.66L19 6Z"
                  ></path>
                </g>
              </svg>
            </div>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default TheFooterSection;
