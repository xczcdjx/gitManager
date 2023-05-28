// Count.context.tsx
import React, { createContext, useCallback, Dispatch, useReducer, useContext } from 'react'

interface IState {
	count: number;
}

interface IContext {
	state: IState;
	dispatch: Dispatch<{
		type: string;
		payload?: Partial<IState>;
	}>;
}

const initValue: IState = {
	count: 0,
};

const Context = createContext<IContext>({
	state: initValue,
	dispatch: () => {},
});

export const ReducerContextProvider: React.FC<{children:any}> = (props) => {
	const reducer = useCallback((preState: IState, action: {
		type: string;
		payload?: Partial<IState>;
	}) => {
		const { type, payload } = action;
		switch(type) {
			default:
				return preState;
			case 'increment':
				return {
					...preState,
					count: preState.count + 1,
				};
			case 'decrement':
				return {
					...preState,
					count: preState.count - 1,
				};
			case 'reset':
				return {
					...preState,
					...payload,
				};
		}
	}, []);
	const [state, dispatch] = useReducer(reducer, initValue);

	return (
		<Context.Provider value={{state, dispatch}}>
			{props.children}
		</Context.Provider>
	);
};

export const useReducerContext = () => {
	return useContext(Context);
};

// App.tsx
/*
import { ReducerContextProvider, useReducerContext } from './Count.context';

const App = () => {
	const { state, dispatch } = useReducerContext();

	return (
		<div>
			<p>
				<button
					type="button"
					onClick={() => dispatch({ type: 'increment' })}
				>
					count is: {state.count}
				</button>
			</p>
		</div>
	);
};

const AppWithStore = () => {
	return (
		<ReducerContextProvider>
			<App />
		</ReducerContextProvider>
	)
}

export default AppWithStore
*/
