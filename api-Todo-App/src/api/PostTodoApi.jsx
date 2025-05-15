import axios from "axios"
import { TODO_API } from '../constants/TodoAPI'

export const PostTodoApi = async (newTodo) => {
    try {
       const response=await axios.post(TODO_API,newTodo)
       console.log("taskPosted",response.data);
       return response.data
    } catch (error) {
        console.log("Error in adding the todo", error);
    }
}

