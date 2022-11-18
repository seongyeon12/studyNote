import Button from './component/Button'
import styles from './style/App.module.css'
import { useState, useEffect } from 'react'

function Hello() {
/*   useEffect(() => {
    console.log("h1 :)")
    return function() {
    console.log("bye :(")
    }
  }, []) */
  useEffect(() => {
    console.log("h1 :)")
    return () => {
    console.log("bye :(")
    }
  }, [])
  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)

  return (
    <>
    <div>
      {showing ? <Hello /> : null} 
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
    </>
  );
}

export default App;
