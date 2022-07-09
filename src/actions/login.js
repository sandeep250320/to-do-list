export const USER_ID = 'USER_ID'
export const SESSION_ID = 'SESSION_ID'
export const TO_DO_DATA = 'TO_DO_DATA'

export  default function getUserCredentials(payload){
    return{
        type:USER_ID,
        payload: payload
    }
}

export  function getSessionId(payload){
    return{
        type: SESSION_ID,
        payload: payload
    }
}
export  function getToDoData(payload){
    return{
        type: TO_DO_DATA,
        payload: payload
    }
}