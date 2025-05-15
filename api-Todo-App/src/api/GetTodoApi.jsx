import axios from "axios"
import { TODO_API } from '../constants/TodoAPI'

export const GetTodoApi=async()=> {

    try {
        const response=await axios.get(TODO_API)
        return response.data
    } catch (error) {
        console.log("error in fetching todos",error);
        throw error
    }
}
