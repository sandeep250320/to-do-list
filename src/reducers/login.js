import { USER_ID } from "../actions/login";
import { SESSION_ID } from "../actions/login";
import { TO_DO_DATA } from "../actions/login";

const initialState = {
    user_id:'',
    userName:'',
    session_id:'',
    to_do_list:{
    }
}
export default function login (state = initialState,action){
    switch (action.type) {
        case USER_ID:
            return{
                ...state,
                user_id:action.payload.user_id,
                userName:action.payload.userName
            }
        case SESSION_ID:
            return{
                ...state,
                session_id:action.payload
            }
        case TO_DO_DATA:
            return{
                ...state,
                to_do_list:action.payload
            }
    
        default:
           return state
    }
}
