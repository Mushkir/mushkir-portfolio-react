import PropTypes from "prop-types";

const FormInput = ({ type = "text", id, label, placeholder }) => {
  return (
    <div className="w-full mb-5">
      <label htmlFor={id} className=" text-main-heading-color font-semibold">
        {label}
      </label>
      <div>
        <input
          type={type}
          id={id}
          name={id}
          className="w-full p-3 rounded-md outline-none text-primary-blue capitalize mt-2 bg-secondary-font-color placeholder-primary-blue"
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
