import React from 'react';
import PropTypes from 'prop-types';

const LinkTo = (props) => {
  const { name, path } = props;
  return (
    <a className="m-left p-left" href={path}>{name}</a>
  );
};

LinkTo.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default LinkTo;
