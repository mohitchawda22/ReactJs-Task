import { useEffect } from "react"
import { useState } from "react"


export default function useApi(url,limit){
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(null)
  
    useEffect(()=>{
      const fetchData=async()=>{
        setLoading(true)
        try {
          const response=await fetch(`${url}/?_limit=${limit}}`)
          const result=await response.json()
          setData(result)
        } catch (error) {
          console.log(error,"error");
          setData([])
        }finally{
          setLoading(false)
        }
      }
      fetchData()
    },[url,limit])
  
    return{data,loading}
  }