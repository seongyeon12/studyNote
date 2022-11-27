import { createContext, useContext } from 'react'

const ThemeContext = createContext({backgroundColor: '#FFFFFF'})
ThemeContext.displayName = 'MyDisplayName'

function Context() {
  return (
    <>
    <ThemeContext.Provider value={{backgroundColor: '#000000', color: 'white'}}>
      <Toolbar />
      <Toolbar2 />
      <ThemeContext.Consumer>
      {value => console.log(value)}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
      <ThemeContext.Consumer>
      {value => console.log(value, "하얀색")}
      </ThemeContext.Consumer>

    </>
  );
}

function Toolbar() {
  return (
    <div>
      <ThenedButton />
    </div>
  )
}

function ThenedButton() {
  let contextType = useContext(ThemeContext);

  return (
    <button style={contextType} >안녕하세요</button>
  )
}

function Toolbar2() {
  return (
    <div>
      <ThenedButton2 />
    </div>
  )
}

function ThenedButton2() {
  let contextType = useContext(ThemeContext);

  return (
    <button style={contextType} >안녕못해</button>
  )
}

export default Context;
