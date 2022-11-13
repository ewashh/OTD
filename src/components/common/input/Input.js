import React from "react";
import PropTypes from 'prop-types';
import "./input.scss"

export default function Input({ label,
                                value,
                                type,
                                placeholder,
                                name,
                                required
                              }){
                                 
  const [inputValue, setInputValue] = React.useState(value ? value : '');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="component-input">
      <label>{label}{required && '*'}</label>
      { type == "textarea" ? 
        <textarea
          value={inputValue}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
          rows="5"
          required={required}
        />
        :
        <input
          type={type}
          value={inputValue}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      } 
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'textarea', 'email', 'file'])
};