import { Profiler, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addtask, deleteTask, fetchData } from '../Store/Store.jsx'

function Todo() {
    const onRender = (id, phase, actualTime, baseTime, startTime, commitTime) => {
        console.log("id:", id);
        console.log("phase:", phase);
        console.log("actualTime:", actualTime);
        console.log("baseTime:", baseTime);
        console.log("startTime:", startTime);
        console.log("commitTime:", commitTime);
    }
    const [task, setTask] = useState('')
    const tasks = useSelector((state) => state.taskReducer.task)
    console.log("react State:", tasks)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            dispatch(addtask(task))
        }
        return setTask('')
    }
    const handleDeleteTask = (id) => {
        return dispatch(deleteTask(id))
    }

    const handleFetch = () => {
        dispatch(fetchData())
    }
    
    return (
        <Profiler id='todo' onRender={onRender}>
            <div className="container">
                <div className="row justify-content-center align-items-center main-row">
                    <div className="col shadow main-col bg-white">
                        <div className="row bg-primary text-white">
                            <div className="col  p-2">
                                <h4 className='text-center'>Redux Todo App</h4>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row justify-content-between text-white p-2">
                                <div className="form-group flex-fill mb-2">
                                    <input id="todo-input" type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 ml-2" >Add todo</button>
                                <button type="button" className="btn btn-primary mb-2 ml-2" onClick={handleFetch} >Fetch todo</button>
                            </div>
                        </form>
                        <ul className='d-flex flex-column'>
                            {
                                tasks?.map((task, index) => (
                                    <li key={index} className='d-flex justify-content-evenly'>
                                        <p>{index}:{task}</p>
                                        <div>
                                            <MdDeleteForever className='icon-style' onClick={() => handleDeleteTask(index)} />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Profiler>
    )
}

export default Todo
