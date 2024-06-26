import React from 'react'
import imgProduct from "../../asset/onion.jpg"
import { BsCart3 } from 'react-icons/bs';
import { AppContextAPI } from '../../Context/AppContext';
import { useSelector } from 'react-redux';
import {GetUserInfo} from "../../redux/selector"
const Product = () => {
    const [listProduct,setListProduct] = React.useState([])
    const {hanldeAddCart} = React.useContext(AppContextAPI)
    const {idAccount} = useSelector(GetUserInfo)
    React.useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_BACK}/pizzas`,{
            method:"GET",
            credentials:"include"
        }).then(res=>res.json()).then(data=>setListProduct(data)).catch(err=>console.log(err))
    },[])
  return (
    <div className='flex justify-center my-9'>
       <ul id='list' className='flex overflow-hidden gap-16 mx-auto flex-wrap w-[90%]'>
           {listProduct.map((pro,index)=>(
             <li key={index} className='border w-[30%] py-9 items-center rounded-3xl justify-center border-gray-300'>
             <img className='object-cover mx-auto hover:scale-110 ease-out duration-300 bg-transparent' src={imgProduct} width={250} alt="" />
             <div className='flex justify-around'>
                 <h2 className='font-medium text-2xl'>{pro.namePiza}</h2>
                 <p className='text-red-600'>$ ${pro.Price}</p>
             </div>
             <p className='w-[80%] text-lg mx-auto opacity-70'>{pro.Description} </p>
             <button onClick={()=>hanldeAddCart({idAccount,...pro,quantity:1})} className="flex items-center mx-auto  py-3 rounded-3xl mt-8 text-white -translate-x-3 px-20 tracking-widest text-xl duration-200 ease-out bg-button hover:bg-red-600"><BsCart3/> Order NOW</button>
         </li>
           ))}
        </ul>
    </div>
  )
}

export default Product