import React from 'react'
import "../styles/Timer.scss"
import { useState } from 'react'
import { useEffect } from 'react'

function Timer() {
    const [time,setTime]=useState(0)
    const [isrunning,setIsRunning]=useState(false)

    const start=()=>{
        if(!isrunning){
            setIsRunning(true)
        }
    }

    const stop=()=>{
        setIsRunning(false)
    }

    const reset=()=>{
        setIsRunning(false)
        setTime(0)
    }

    useEffect(()=>{
        let interval=null
        console.log("timer Mounted......");
        if(isrunning){
            interval=setInterval(()=>{
                setTime((prev)=>prev+1)
            },1000)
        }else{
            clearInterval(interval)
        }

        return ()=>{
            clearInterval(interval,"timer stop...")
        }
    },[isrunning])

  return (
   <>
    <div className='timer-card'>
        <h1 className='timer'>Timer:</h1>
        <h1 className='time'>{time}</h1>
        <button onClick={start} className='start btn mx-3'>Start</button>
        <button onClick={stop} className='stop btn'>Pause</button>
        <button onClick={reset} className='reset btn mx-3'>Reset</button>
    </div>
   </>
  )
}

export default Timer
