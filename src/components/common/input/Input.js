import React from "react";
import PropTypes from 'prop-types';
import "./input.scss"

export default function Input({ label,
                                value,
                                type,
                                placeholder
                              }){
                                 
  const [inputValue, setInputValue] = React.useState(value ? value : '');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="component-input">
      <label>{label}</label>
      { type == "textarea" ? 
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        :
        <input
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      } 
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'textarea', 'email'])
};