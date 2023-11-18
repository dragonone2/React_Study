

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let[modal, setModal] = useState(false);
  let[title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
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

      {
        글제목.map(function(a, i){ //map 반복분이 돌때마다 a라는 파라미터가 State배열 안에 데이터를 받는다, i는 0부터1씩 증가함 총 2개의 파라마티 설정 가능 
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{
              setModal(true)
              setTitle(i)
              }}>{글제목[i]}
           
            <span onClick={(e)=>{
              e.stopPropagation(); //html 버블링 현상을 막아줌 ( 스팬을 눌르면 그 뒤에것도 눌리는 현상)
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy)
            }}>👍</span> {따봉[i]} 

            <button onClick={(e)=>{
              e.stopPropagation();
              let copy1 = [...글제목];
              copy1.splice(i,1); //0번째 항목 삭제시 0,1 1번째 삭제시 1,1
              글제목변경(copy1);
            }}>삭제</button>

            </h4>
            <p>11월14일 발행</p>
           </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
        }}/>
        <button onClick={()=>{
          let copy2 = [...글제목];
          copy2.unshift(입력값); //입력값State에 저장된 값을 추가해주는 기능
          글제목변경(copy2);
        }}>변경</button>
      

      { 
      modal == true ? <Modal 변경 = "여자코트 추천" title = {title} 글제목={글제목}/> : null //이 코드는 if문 ( 조건 ? 참일떄 : 거짓일때)
      }
    </div>
  );
  
  function Modal(props){
    return(
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    )
  }




}

export default App;
