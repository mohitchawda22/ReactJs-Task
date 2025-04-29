import {  useRef, useState } from 'react'
import './App.css'
import Video from './components/video'

function App() {

  const inputOne =useRef()
  const inputTwo=useRef()
  const [text,setText]=useState()

  const getBox1=()=>{
    console.log("box1");
    inputOne.current.style.width="400px"
  }

  const getBox2=()=>{
    console.log("box2");
    inputTwo.current.style.width="300px"
  }

  return (
    <>
        <div>
          <h2>Input Field Manipulation using Ref :</h2>
          <div>
          <input type="text" ref={inputOne} value={text} onChange={(e)=>{setText(e.target.value)}} style={{width:"100px"}} />
          <input type="text" ref={inputTwo} value={text} onChange={(e)=>{setText(e.target.value)}} style={{width:"100px"}}  />
          </div>

          <button  onClick={getBox1}>button1</button>
          <button onClick={getBox2}>button2</button>
        </div>
        <div>
          <h2>video Manipulation using Ref:</h2>
        <Video></Video>
        </div>
    </>
  )
}

export default App
