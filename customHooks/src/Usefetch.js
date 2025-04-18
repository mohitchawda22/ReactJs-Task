import { useEffect } from "react"
import { useState } from "react"


export default function useApi(url,limit){
    const [data,setData]=useState({data:[],loading:false,error:null})
    // const [loading,setLoading]=useState(null)
    // console.log(data,"dta");
    
  
    useEffect(()=>{
      const fetchData=async()=>{
        // setLoading(true)
        setData({...data,loading:true})
        try {
          const path=limit? `${url}?_limit=${limit}`: url
          const response=await fetch(path)
          console.log(response);
          
          const result=await response.json()
          const obj = {...data,data:result}
          setData(obj)
          console.log(obj,"obj");
          // console.log(result);
          // setData({...data,data:result})
        } catch (error) {
          console.log(error,"error");
          setData({...data,error:error})
          // setData([])
        }
        // finally{
        //   // setLoading(false)
        //   // setData({...data,loading:false})
        // }
      }
      if (url){
        fetchData()
      }
    },[url,limit])
  
    return{data}
  }