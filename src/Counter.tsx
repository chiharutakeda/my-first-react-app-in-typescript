import React, { useRef, useState, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setvalue] = useState<number>(initialValue);

  const increment = () => {
    // setvalue(value+1);
    setvalue((prev) => prev + 1);
  };
  const decrement = () => {
    // setvalue(value-1);
    setvalue((prev) => prev - 1);
  };

  const renderTimes = useRef(0);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  return (
    <div>
      <div>value:{value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>this component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
