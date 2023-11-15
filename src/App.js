

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, c] = useState(0);

  return (
    <div className="App">
     <div className='black-nav'>
      <h4>ReactBlog</h4>
     </div>

     <button onClick={()=>{
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy);
      }}>변경</button>

     <div className='list'>
      <h4>{글제목[0]} <span onClick={ ()=>{c(따봉+1)}}>👍</span> {따봉} </h4>
      <p>11월14일 발행</p>
     </div>


     <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>11월14일 발행</p>
     </div>
     <div className='list'>
      <h4>{글제목[2]}</h4>
      <p>11월14일 발행</p>
     </div>
    </div>
  );
}

export default App;
