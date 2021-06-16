import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName } = props;
  return (
    <div className="btn">
      {buttonName}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
};
