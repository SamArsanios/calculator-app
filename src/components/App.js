import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  const [data, setData] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const handleClick = (button) => {
    const result = calculate(data, button);
    setData(result);
  };

  let { total, next, operation } = data;

  return (
    <>
      <div className="App">
        <Display result={`${total} ${operation} ${next}`} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}
