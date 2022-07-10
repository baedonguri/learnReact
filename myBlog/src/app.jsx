import React from 'react';
import { useState } from 'react';
import './app.css';
import Modal from './component/Modal';
function App() {
  
  let [post, setPost] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬독학']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(true);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'aqua', fontSize:'16px'}}>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{post[0]} <span onClick={()=>{setLike(like+1)}}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{post[1]} <span onClick={()=>{setLike(like+1)}}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{post[2]} <span onClick={()=>{setLike(like+1)}}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal ? <Modal /> : null
      }

    </div>
  )
}

export default App;
