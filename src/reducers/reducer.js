import { ActionTypes } from "../actions/actions";

 export const reducer=(state,action)=>{
    switch (action.type) {
        case ActionTypes.TOGGLE_THEME:
            
            return {...state,theme: state.theme === 'light' ? 'dark':'light'} ;
        case ActionTypes.GET_ALL_DENTIST:
            return {...state,dentists:action.payload}
        default:
            break;
    }

}