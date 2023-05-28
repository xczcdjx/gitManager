
export interface initProps {
    id:string,name:string
}
export interface actionProps {
    type: 'add'|'del'|'upd'|'cle'
    data?: any;
}
const reducer = (state: initProps[], action: actionProps): Array<initProps> => {
    switch (action.type) {
        case 'add': {
            return [...state,action.data];
        }
        case 'del':{
            return state.map(it=>{
                if (it.id===action.id) return action.data
                return it
            })}
    }
}
export default reducer