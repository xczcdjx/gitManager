import {useState,useEffect} from "react";
import axios from "axios";
interface paramsType<T>{
    data:T|null,
    loading:boolean,
    error:string
}
function useUrlLoader<T=any>(url:string,params?:any):paramsType<T>{
    const [data,setData]=useState<T|null>(null)
    const [loading,setLoading]=useState<boolean>(true)
    const [error,setError]=useState<any>(null)
    useEffect(()=>{
        setLoading(true)
        axios.get(url,params).then(v=>{
            setLoading(false)
            setData(v.data)
        }).catch(r=> {
            setError(r.message);
            setLoading(false)
        })
    },[params])
    return {data,loading,error}
}
export default useUrlLoader