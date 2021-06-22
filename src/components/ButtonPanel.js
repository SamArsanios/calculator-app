import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (button) => (
    props.clickHandler(button)
  );

  return (
    <div className="button-panel">
      <div className="buttons font">
        <Button color="grey" name="AC" clickHandler={handleClick} />
        <Button color="grey" name="+/-" clickHandler={handleClick} />
        <Button color="grey" name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="buttons font">
        <Button color="grey" name="7" clickHandler={handleClick} />
        <Button color="grey" name="8" clickHandler={handleClick} />
        <Button color="grey" name="9" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="buttons">
        <Button color="grey" name="4" clickHandler={handleClick} />
        <Button color="grey" name="5" clickHandler={handleClick} />
        <Button color="grey" name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="buttons">
        <Button color="grey" name="1" clickHandler={handleClick} />
        <Button color="grey" name="2" clickHandler={handleClick} />
        <Button color="grey" name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="buttons">
        <Button width="width" color="grey" name="0" clickHandler={handleClick} />
        <Button color="grey" name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
