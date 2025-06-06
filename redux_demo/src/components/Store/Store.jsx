/* eslint-disable no-case-declarations */
// import { composeWithDevTools } from "@redux-devtools/extension"
import { configureStore, createSlice } from "@reduxjs/toolkit"

// import {createStore,applyMiddleware} from "redux" 
// import { thunk } from "redux-thunk" //Currently createStore is deprecated but we know this how to use this method and now redux Toolkit is been used

const ADD_TASK="task/add"
const DELETE_TASK="task/delete"
const FETCH_TASK="task/fetch"

const initialState={
    task:[]
}

// const taskReducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case ADD_TASK:
//             return{
//                 ...state,
//                 task:[...state.task,action.payload]
//             }

//         case DELETE_TASK:
//             const updatedTask=state.task.filter((currTask,index)=>{
//               return index !== action.payload  
//             })
//             return{
//                 ...state,
//                 task:updatedTask,
//             }
//         case FETCH_TASK:
//             return{
//                 ...state,
//                 task:[...state.task,...action.payload]
//             }
    
//         default:
//             return state
//     }

// }

//Now we Crate a actionCreator which can be used to dispatch the the object with the function call

// export const addtask=(data)=>{
//     return {type:ADD_TASK,payload:data}
// }

// export const deleteTask=(id)=>{
//     return {type:DELETE_TASK,payload:id}
// }

// RTK Slice
const taskReducer=createSlice({
    name:"task",
    initialState,
    reducers:{
        addtask(state,action){
            state.task.push(action.payload)
        },
        deleteTask(state,action){
            state.task=state.task.filter((curTask,index)=>index!== action.payload)
        }
    }
})

export const {addtask,deleteTask}=taskReducer.actions


export const fetchData=()=>{
    return async(dispatch)=>{
        try {
            const res=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
            const task=await res.json()
            console.log(task);
            dispatch({type:FETCH_TASK,payload:task.map((task)=>task.title)})
        } catch (error) {
            console.log("error",error);
        }
    }
}

//! New way of redux and create store 
export const store=configureStore({
    reducer:{
        taskReducer:taskReducer.reducer
    }
})
//This is how we create store with createStore Method 
// export const store=createStore(taskReducer,composeWithDevTools(applyMiddleware(thunk)))
console.log(store);
// console.log(store.dispatch(addtask("mango")));
// console.log(store.dispatch(addtask("mango")));
// console.log(store.dispatch(deleteTask(1)));



//This is how we log the current state of the store 
console.log("InitalState:",store.getState());
//This is how we dispatch the task in the redux 
// store.dispatch({type:ADD_TASK,payload:"Mango"}) // this is the od\ld way to dispatch 

// store.dispatch(addtask("Mango"))
// store.dispatch(addtask("Mango"))
// store.dispatch(addtask("Mango"))
// store.dispatch(addtask("Mango"))
// store.dispatch(addtask("Mango"))

// console.log("updatedState:",store.getState());

// // store.dispatch({type:ADD_TASK,payload:"Apple"})
// store.dispatch(addtask("Apple"))

// // console.log("updatedState:",store.getState());

// // store.dispatch({type:DELETE_TASK,payload:0})
// store.dispatch(deleteTask(1))

// console.log("deletedState:",store.getState());

