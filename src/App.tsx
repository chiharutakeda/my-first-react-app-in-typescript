import React from 'react';
import Counter from './Counter'
import CounterWithReducer from './CounterWithReducer'
interface AppProps {
  message?: string;
}

//コンポーネントに対して型指定してあげないとまずい。
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
      <CounterWithReducer />
    </div>
  )
};

//propsの初期値設定できる。
App.defaultProps = {
  message: 'HELLO default props!!',
};

export default App;
