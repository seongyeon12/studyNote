import './App.css';
import React, { useState, useEffect } from 'react';

/* 
  [hook 사용 규칙]
  -최상위에서 호출되어야 한다
  -오직 React 함수에서만 hook을 호출해야 한다
  -
*/

// useEffect 
/* 
mount ( = 리액트 컴포넌트가 그려질 때, 렌더될 때)
unmount ( = 리액트 컴포넌트가 사라질 때, 지워질 때)
update ( = 특정 값이 변해 리액트 컴포넌트가 다시 그려질 때)
*/

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (count === 5) {
      console.log('this is five')
    }
  }, [count])

  // mount, unmount, update
  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
