import {useEffect, useState} from "react";
type position={x:number,y:number}
const usePosition=()=>{
    const [p,setP]=useState<position>({x:0,y:0})
    useEffect(() => {
        const getPosition=(e:MouseEvent)=>{
            setP({x:e.clientX,y:e.clientY})
        }
        window.addEventListener('click',getPosition)
        return () => {
            window.removeEventListener('click',getPosition)
        };
    }, []);
    return p
}
export default usePosition