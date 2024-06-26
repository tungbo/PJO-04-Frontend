import React from 'react'
import preLoad from "../../asset/preloader.svg"
import { AppContextAPI } from '../../Context/AppContext'
const Loading = () => {
    const {isLoading,setIsLoading} = React.useContext(AppContextAPI)

    React.useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
    },[isLoading,setIsLoading])
  return (
    isLoading ? (<div className='w-full fixed h-screen z-[99999999999] bg-white top-0'>
        <img className='w-[300px] h-[300px] translate-y-1/2 mx-auto' src={preLoad} alt="" />
    
    </div>):null
  )
}

export default Loading