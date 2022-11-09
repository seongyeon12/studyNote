import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList'

function App() {
  const [inputText, setinputText] = useState("")
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List {inputText} </h1>
      </header>
      <Form setinputText={setinputText}/>
      <TodoList />
    </div>
  );
}

export default App;
