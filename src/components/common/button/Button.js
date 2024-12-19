import React from "react";
import PropTypes from 'prop-types';
import "./button.scss"

export default function Button({ text, type, size, color, href, children }){

  return (
    type == "link" ?
      <a href={href} className={`component-button ${size == 'link' ? 'min' : size} ${color}`}>{text}</a>
    :
      <button type={type} className={`component-button ${size == 'link' ? 'min' : size} ${color}`}>{text}{children}</button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'link']),
  size: PropTypes.oneOf(['small', 'big', 'link']),
  color: PropTypes.oneOf(['blue', 'red'])
};

Button.defaultProps = {
  type: 'button',
  size: 'small',
  color: 'blue'
};
