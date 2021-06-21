import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="buttons">
        <Button color="grey" buttonName="AC" />
        <Button color="grey" buttonName="+/-" />
        <Button color="grey" buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div className="buttons">
        <Button color="grey" buttonName="7" />
        <Button color="grey" buttonName="8" />
        <Button color="grey" buttonName="9" />
        <Button buttonName="X" />
      </div>
      <div className="buttons">
        <Button color="grey" buttonName="4" />
        <Button color="grey" buttonName="5" />
        <Button color="grey" buttonName="6" />
        <Button buttonName="-" />
      </div>
      <div className="buttons">
        <Button color="grey" buttonName="1" />
        <Button color="grey" buttonName="2" />
        <Button color="grey" buttonName="3" />
        <Button buttonName="+" />
      </div>
      <div className="buttons">
        <Button color="grey" buttonName="0" />
        <Button color="grey" buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
}
