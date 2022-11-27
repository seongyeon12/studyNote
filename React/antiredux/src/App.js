/* context를 적용하지 않은 기존 코드 */

function App() {
  return (
    <div className="App">
      <Toolbar theme={{background: "red"}} />
    </div>
  );
}

function Toolbar(props) {
  console.log(props.theme)
  return (
    <div>
      <ThenedButton theme={props.theme} />
    </div>
  )
}

function ThenedButton(props) {
  return (
    <button style={props.theme} />
  )
}

export default App;
