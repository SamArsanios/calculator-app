import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default ButtonPanel = () => {
  return (
    <div className="button-panel">
      <div className="buttons">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div className="buttons">
        <Button buttonName />
        <Button buttonName />
        <Button buttonName />
        <Button buttonName />
      </div>
      <div className="buttons">
        <Button buttonName />
        <Button buttonName />
        <Button buttonName />
        <Button buttonName />
      </div>
      <div className="buttons">
        <Button buttonName />
        <Button buttonName />
        <Button buttonName />
        <Button buttonName />
      </div>
    </div>
  );
}