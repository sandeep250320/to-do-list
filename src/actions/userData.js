export const GET_USER_ID = 'GET_USER_ID'
export const GET_ACCESS_TOKEN ="GET_ACCESS_TOKEN"
export const GET_FULL_NAME ="GET_FULL_NAME"
export const GET_USERNAME ="GET_USERNAME"
export const GET_USER_EMAIL = 'GET_USER_EMAIL'

export function getUserId (payload) {
    return{
        type: GET_USER_ID,
        payload:payload
    }
}
export function getAccessToken (payload) {
    return{
        type: GET_ACCESS_TOKEN,
        payload:payload
    }
}
export function getFullName (payload) {
    return{
        type: GET_FULL_NAME,
        payload:payload
    }
}
export function getUserName (payload) {
    return{
        type: GET_USERNAME,
        payload:payload
    }
}
export function getUserEmail (payload) {
    return{
        type: GET_USER_EMAIL,
        payload:payload
    }
}