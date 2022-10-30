/* import React from 'react';
import logo from '../logo.svg'

const Header = () => {
  const name = "React"
  const count = 0;
  const nemo = "";

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p><p class="aaa" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name === "React" 
          ? `Hello, ${name}! Learn React`
          : `Welcome, $${name}! Learn React`}
        </a>
        {nemo !== null && `네모: ${nemo}`}
      </header>
  );
}
 */

//export default App;

import React from 'react';
import logo from '../logo.svg'

const Header = {
  A: function A(props) {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p><p class="aaa" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      </header>
  )}
}

export default Header
