import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Product from "../../asset/onion.jpg"
import { BsCart3 } from 'react-icons/bs';
import "./index.css"
const OurMenu = () => {
    React.useEffect(()=>{
        document.getElementById("formList").scrollLeft += 400
    },[])
    const ref = React.useRef()
    const hanldeNext =()=>{
        let size =ref.current.offsetWidth 
        document.getElementById("formList").scrollLeft += size
    }
    const hanldePre =()=>{
        let size =ref.current.offsetWidth 
        document.getElementById("formList").scrollLeft -= size
    }
  return (
    <div className='w-full mt-64'>
        <div className='flex w-[90%] mx-auto justify-between items-center'>
            <div className='mb-9'>
                <p className='text-3xl text-red-500 font-medium tracking-wide'>Popular Dishes _____</p>
                <h1 className='text-5xl font-bold'>Our Menu</h1>
            </div>
            <div className='flex items-center gap-14'>
                <button onClick={hanldePre} className='bg-button rounded-full p-4 ease-in duration-100 active:scale-90 '><FaArrowLeft size={30}/></button>
                <button onClick={hanldeNext} className='bg-button rounded-full p-4 ease-in duration-100 active:scale-90 '><FaArrowRight size={30}/></button>
            </div>
        </div>
        <div ref={ref} id='formList' className='overflow-auto'>
        <ul id='list' className='flex overflow-hidden gap-10 w-max'>
            <li className='border w-[30%] py-9 items-center rounded-3xl justify-center border-gray-300'>
                <img className='object-cover mx-auto hover:scale-110 ease-out duration-300 bg-transparent' src={Product} width={250} alt="" />
                <div className='flex justify-around'>
                    <h2 className='font-medium text-2xl'>Onion Rings</h2>
                    <p className='text-red-600'>$ 35.00</p>
                </div>
                <p className='w-[80%] text-lg mx-auto opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <button className="flex items-center mx-auto  py-3 rounded-3xl mt-8 text-white -translate-x-3 px-20 tracking-widest text-xl duration-200 ease-out bg-button hover:bg-red-600"><BsCart3/> Order NOW</button>
            </li>
            <li className='border w-[30%] py-9 items-center rounded-3xl justify-center border-gray-300'>
                <img className='object-cover mx-auto hover:scale-110 ease-out duration-300 bg-transparent' src={Product} width={250} alt="" />
                <div className='flex justify-around'>
                    <h2 className='font-medium text-2xl'>Onion Rings</h2>
                    <p className='text-red-600'>$ 35.00</p>
                </div>
                <p className='w-[80%] text-lg mx-auto opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <button className="flex items-center mx-auto  py-3 rounded-3xl mt-8 text-white -translate-x-3 px-20 tracking-widest text-xl duration-200 ease-out bg-button hover:bg-red-600"><BsCart3/> Order NOW</button>
            </li><li className='border w-[30%] py-9  items-center rounded-3xl justify-center border-gray-300'>
                <img className='object-cover mx-auto hover:scale-110 ease-out duration-300 bg-transparent' src={Product} width={250} alt="" />
                <div className='flex justify-around'>
                    <h2 className='font-medium text-2xl'>Onion Rings</h2>
                    <p className='text-red-600'>$ 35.00</p>
                </div>
                <p className='w-[80%] text-lg mx-auto opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <button className="flex items-center mx-auto  py-3 rounded-3xl mt-8 text-white -translate-x-3 px-20 tracking-widest text-xl duration-200 ease-out bg-button hover:bg-red-600"><BsCart3/> Order NOW</button>
            </li><li className='border w-[30%] py-9 items-center rounded-3xl justify-center border-gray-300'>
                <img className='object-cover mx-auto hover:scale-110 ease-out duration-300 bg-transparent' src={Product} width={250} alt="" />
                <div className='flex justify-around'>
                    <h2 className='font-medium text-2xl'>Onion Rings</h2>
                    <p className='text-red-600'>$ 35.00</p>
                </div>
                <p className='w-[80%] text-lg mx-auto opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <button className="flex items-center mx-auto  py-3 rounded-3xl mt-8 text-white -translate-x-3 px-20 tracking-widest text-xl duration-200 ease-out bg-button hover:bg-red-600"><BsCart3/> Order NOW</button>
            </li><li className='border w-[30%] py-9 items-center rounded-3xl justify-center border-gray-300'>
                <img className='object-cover mx-auto hover:scale-110 ease-out duration-300 bg-transparent' src={Product} width={250} alt="" />
                <div className='flex justify-around'>
                    <h2 className='font-medium text-2xl'>Onion Rings</h2>
                    <p className='text-red-600'>$ 35.00</p>
                </div>
                <p className='w-[80%] text-lg mx-auto opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <button className="flex items-center mx-auto  py-3 rounded-3xl mt-8 text-white -translate-x-3 px-20 tracking-widest text-xl duration-200 ease-out bg-button hover:bg-red-600"><BsCart3/> Order NOW</button>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default OurMenu