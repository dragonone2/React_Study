

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let[modal, setModal] = useState(false);

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

    <button onClick={()=>{
      let 정렬 = [...글제목];
      정렬.sort();
      글제목변경(정렬);
      }}>정렬</button>


     {/* <div className='list'>
      <h4>{글제목[0]} <span onClick={ ()=>{c(따봉+1)}}>👍</span> {따봉} </h4>
      <p>11월14일 발행</p>
     </div>

     <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>11월14일 발행</p>
     </div>

     <div className='list'>
      <h4 onClick={()=>{setModal(true)}}>{글제목[2]}</h4>
      <p>11월14일 발행</p>
     </div> */}

      {
        글제목.map(function(a, i){ //map 반복분이 돌때마다 a라는 파라미터가 State배열 안에 데이터를 받는다, i는 0부터1씩 증가함 총 2개의 파라마티 설정 가능 
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{setModal(true)}}>{글제목[i]}
            <span onClick={()=>{
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy)
            }}>👍</span> {따봉[i]} 
            </h4>
            <p>11월14일 발행</p>
           </div>
          )
        })
      }


      { 
      modal == true ? <Modal/> : null //이 코드는 if문 ( 조건 ? 참일떄 : 거짓일때)
      }
    </div>
  );


  // const Modal = () => {
  //   return(
  //     <div className='modal'>
  //       <h4>제목</h4>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div>
  //   )
  // }  밑의 함수랑 같은 의미

  function Modal(){
    return(
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

}

export default App;
