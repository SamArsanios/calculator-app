import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="buttons font">
        <Button color="grey" name="AC" />
        <Button color="grey" name="+/-" />
        <Button color="grey" name="%" />
        <Button name="÷" />
      </div>
      <div className="buttons font">
        <Button color="grey" name="7" />
        <Button color="grey" name="8" />
        <Button color="grey" name="9" />
        <Button name="X" />
      </div>
      <div className="buttons">
        <Button color="grey" name="4" />
        <Button color="grey" name="5" />
        <Button color="grey" name="6" />
        <Button name="-" />
      </div>
      <div className="buttons">
        <Button color="grey" name="1" />
        <Button color="grey" name="2" />
        <Button color="grey" name="3" />
        <Button name="+" />
      </div>
      <div className="buttons">
        <Button width="width" color="grey" name="0" />
        <Button color="grey" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
