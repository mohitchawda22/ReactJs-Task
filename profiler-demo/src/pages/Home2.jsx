import React, { Profiler, useMemo, useState } from 'react'

function Home2() {
    const [counter, setCounter] = useState(0)
    const onRender = (id, phase, actualTime, baseTime, startTime, commitTime) => {
        console.log("id:", id);
        console.log("phase:", phase);
        console.log("actualTime:", actualTime);
        console.log("baseTime:", baseTime);
        console.log("startTime:", startTime);
        console.log("commitTime:", commitTime);
    }

    const getCounter = useMemo(() => {
        return <p>{counter}</p>
    }, [counter])

    return (
        <Profiler id='home2' onRender={onRender}>
            <div>
                hello
                {getCounter}
                <button onClick={() => setCounter(counter + 1)}>increase</button>
            </div>
        </Profiler>
    )
}

export default Home2
