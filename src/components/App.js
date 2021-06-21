import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  const handleClick = (button) => {
    const result = calculate(data, button);
    setData(result);
  };

  return (
    <>
      <div className="App">
        <Display />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}
