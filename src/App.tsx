import React, {useEffect, useState} from "react";
import {Hello} from "./components/Hello";
import usePosition from "./hooks/usePosition";
import useUrlLoader from "./hooks/useUrlLoader";
// import {CReducer} from "./components/CReducer";
import { ReducerContextProvider } from './components/useReducer/NCreducer';
import {NCCreducer} from "./components/useReducer/NCCreducer";
export const App: React.FC = () => {
    const [d, setD] = useState(new Date())
    const [c, setC] = useState(0)
    const p = usePosition()
    useEffect(() => {
        let t = setInterval(() => {
            setD(new Date())
        })
        return () => clearInterval(t)
    }, [])

    const hh = d.getHours()
    const mm = d.getMinutes()
    const ss = d.getSeconds()
    const {data,loading,error}=useUrlLoader<{message:string}>('https://dog.ceo/api/breeds/image/random',c)
    return (
        <div>
            <h3>时间钟表</h3>
            <p>{hh + ':' + mm + ':' + (ss < 10 ? '0' + ss : ss)}</p>
            <Hello/>
            <p>{'x:' + p.x + ' y:' + p.y}</p>
            <button onClick={() => setC(c + 1)}>change dog img</button>
            <p>{c}</p>
            {error&&<p>{error}</p>||loading&&<h3>loading ...</h3>||<img src={data?.message}/>}
            <p>useReducer</p>
            {/*<CReducer/>*/}
            <ReducerContextProvider>
                <NCCreducer/>
            </ReducerContextProvider>
        </div>
    )
};