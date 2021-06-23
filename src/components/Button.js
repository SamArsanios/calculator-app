import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, color, width, clickHandler,
  } = props;

  const handleClick = (button) => clickHandler(button);

  return (
    <button
      className={`button ${color} ${width}`}
      type="button"
      onClick={handleClick.bind(this, name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  width: '',
};

export default Button;
