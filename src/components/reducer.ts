import {GlobalFace} from "./CReducer";

const reducer = (state: GlobalFace, action: Partial<GlobalFace>): GlobalFace => ({
    ...state,
    ...action
    /*switch (action.type) {
        case 'add': {
            return [...state, action];
        }
        case 'del':{
            return state.map(it=>{
                if (it.id===action.id) return action
                return it
            })}

    }*/
})
export default reducer