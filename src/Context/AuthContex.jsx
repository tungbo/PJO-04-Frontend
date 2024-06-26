import React from 'react'
import {CookieController} from "../Service/CookiesController"
export const AuthCreateContext = React.createContext()
const AuthContex = ({children}) => {
  const [auth, setAuth] = React.useState(false)
  console.log(auth)
   React.useEffect(()=>{
    const checkLogin =CookieController.getTokenCookies("isLogin")
    if(checkLogin){
      setAuth(true)
    }
   },[auth])
  return (
    <AuthCreateContext.Provider value={{auth,setAuth}}>{children}</AuthCreateContext.Provider>
  )
}

export default AuthContex