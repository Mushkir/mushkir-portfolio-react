import PropTypes from "prop-types";

const FormTextArea = ({ name, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>Message</label>
      <div>
        <textarea
          name={name}
          id={name}
          rows={5}
          className="w-full p-3 rounded-md outline-none text-primary-blue capitalize mt-2 bg-secondary-font-color"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormTextArea;
