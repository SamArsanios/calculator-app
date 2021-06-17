import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, clickHandler } = props;
  const handleClick = (button) => clickHandler(button);
  return (
    <button
      className="button"
      type="button"
      onClick={handleClick.bind(this, name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};
