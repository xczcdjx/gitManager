import {createContext, Dispatch, useContext, useEffect, useReducer, useRef} from "react";

import reducer, {initProps} from "./reducer2";
const initialState:initProps[]=[
	{id:'001',name:'张三'},
	{id:'002',name:'李四'},
	{id:'003',name:'王五'},
]
const NameList=createContext<{
	state: initProps[];
	dispatch: Dispatch<{
		type: string;
		payload?: Partial<initProps[]>;
	}>;
}>({state:[],dispatch:()=>{}})
const Header=()=>{
	const [state,dispatch]=useContext(NameList)
	const fRef=useRef<HTMLInputElement>(null)
	const add=(e:KeyboardEvent)=>{
		if(e.key==='Enter') {
			dispatch({type: 'add', data: {id: Date.now().toString(), name: fRef.current?.value}})
			fRef.current.value=''
		}
	}
	return (
		<input ref={fRef} placeholder={'输入后已添加'} onKeyUp={add}/>
	)
}
const List=()=>{
	const [state,dispatch]=useContext(NameList)
	useEffect(()=>{
		console.log(state)
	},[state])
	return (
		<>{state.map(it=>(<li key={it.id}>{it.name}</li>))}</>
	)
}
export const CReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<NameList.Provider value={[state,dispatch]}>
			<Header/>
			<ul>
				<List/>
			</ul>
		</NameList.Provider>
	)
}