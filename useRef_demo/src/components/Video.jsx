import React, { useRef, useState } from 'react'

function Video() {

    const [isPlaying,setIsPlaying]=useState(false)
    const videoRef=useRef(null)

    const hanleClick=()=>{
        const nextIsplaying=!isPlaying
        setIsPlaying(nextIsplaying)
        
        if(nextIsplaying){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
    }

  return (
    <>
    <div>
        <video 
        width="640"
        height={360}
        // src='https://www.youtube.com/embed/H5v3kku4y6Q'
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ref={videoRef}
        onPlay={()=>setIsPlaying(true)}
        onPause={()=>setIsPlaying(false)}
        >
            <source src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' type='video/mp4'/>
        </video>
        
        <div>
        <button onClick={hanleClick}>
            {isPlaying?"pause":"play"}
        </button>
        </div>
    </div>
    </>
  )
}

export default Video
