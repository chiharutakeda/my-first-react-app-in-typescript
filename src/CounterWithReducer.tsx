import React, { useReducer } from 'react';
const initialState= { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  //dispatchはreducerのどれを実行できるか選べる関数になる。
  const [state, dispatch] = useReducer(reducer, initialState);
  console.table(state);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default CounterWithReducer;
