import {useReducerContext} from "./NCreducer";

export const NCCreducer = () => {
	return (
		<>
		<A/><br/>
			<B/>
		</>
	)
}
const A = () => {
	const {dispatch}=useReducerContext()
  return (
	  <button onClick={()=>dispatch({type:'increment'})}>count++</button>
  )
}
const B = () => {
	const {state}=useReducerContext()
	return (
		<h3>{state.count}</h3>
	)
}