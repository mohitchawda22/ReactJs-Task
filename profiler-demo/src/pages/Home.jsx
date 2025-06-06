import React, { Profiler, useState } from 'react'

function Home() {
    const [counter, setCounter] = useState(0)
    const onRender = (id, phase, actualTime, baseTime, startTime, commitTime) => {
        console.log("id:", id);
        console.log("phase:", phase);
        console.log("actualTime:", actualTime);
        console.log("baseTime:", baseTime);
        console.log("startTime:", startTime);
        console.log("commitTime:", commitTime);
    }

    const getCounter = () => {
        return <p>{counter}</p>
    }
    return (
        <Profiler id='home' onRender={onRender}>
            <div>
                hello
                {getCounter()}
                <button onClick={() => setTimeout(() => {
                    setCounter(counter+1)
                }, 3000)}
                >increase
                </button>
        </div>
        </Profiler >
    )
}

export default Home
