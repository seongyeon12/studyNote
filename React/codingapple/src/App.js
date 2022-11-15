/* eslint-disable */
import React, { useState } from 'react';
import { Blog } from './Blog';
import { Modal } from './Modal';
import './App.css';
function App() {
  let [a,b] = useState(['남자 코트 추천', '훈제마라탕'])

  function title() {
    let newArr = [...a]
    newArr[0] = '여자 코트 추천'
    b(newArr)
  
    a[0] === '남자 코트 추천' ? b(['여자 코트 추천', '훈제마라탕']) : b(['남자 코트 추천', '훈제마라탕'])
  } 
  

  let posts = '강남 고기 맛집'

  return (
    <div className="App">
      <div className="black-nav">
        <div posts={ posts } >개발 블로그</div>
      </div>
      <div className="list">
        <Blog title={a[0]} data="4/12" like="5"/>
        <Blog title="갈비" data="5/22" like="2"/>
        <Blog title="등심" data="7/05" like="3"/>
        <button onClick={ title }>이거 누르면 바뀜</button>
      </div>
      <Modal />
    </div>
  );
}

export default App;
