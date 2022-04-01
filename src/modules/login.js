
// Action Types
const IS_LOGIN = 'login/IS_LOGIN'
const IS_LOGOUT = 'login/IS_LOGOUT'

// Initail State
const initalState = [
  {
    login: false,
    email: ''
  }
]

// Action Creators
export const isLogin = () => ({ type: IS_LOGIN})
export const isLoginOut = () => ({ type: IS_LOGOUT})



export default function reducer(state = initalState, action) {
  switch ( action.type ) {
    case IS_LOGIN:
      return{
          ...state,
          login: true
        }
    case IS_LOGOUT:
      return {
        ...state,
          login: false
        }
    default:
      return state
  }
}