import React from 'react'
import imgProduct from "../../asset/banner-img.png"
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { GetProductDetail, GetUserInfo } from '../../redux/selector';
import {CookieController} from "../../Service/CookiesController";
import {useNavigate} from "react-router-dom"
import { CartController } from '../../Service/CartController';
const ProductDetail = () => {
  const productDetail = useSelector(GetProductDetail)
  const [quantity,setQuantity] = React.useState(1)
  const {idAccount} = useSelector(GetUserInfo)
  const navigate = useNavigate()
  const hanldeDown =()=>{
    if(quantity<=0){
      setQuantity(0)
      }else{
        setQuantity(quantity-1)
        }
  }
  const hanldeOnchangeInput =(e)=>{
    setQuantity(e.target.value)
  }
  const AddtoCart = ()=>{
    const isLogin =CookieController.getTokenCookies("isLogin")
    if(!isLogin){
      navigate("/Login")
    }else{
      CartController.addCart({idAccount,...productDetail,quantity:quantity})
      navigate("/Pizza/Cart")
    }

  }
  return (
    <div className='flex flex-wrap bg-orange-100'>
        <div className='w-1/2 flex justify-center items-center'>
            <img width={500} src={imgProduct} alt="" />
        </div>
        <div  className='w-1/2 my-auto'>
            <h1 className='text-5xl font-semibold'>{productDetail.namePiza}</h1>
            <p className='text-3xl pt-4 font-semibold text-red-500'>${productDetail.Price}</p>
            <p className='text-xl opacity-75'>{productDetail.Description}</p>
            <div className='flex items-center'><b className='text-xl'>Categories</b>: <p className='pl-4'>Pizzas,Popular Dishes</p></div>
            <div><b>Size</b>: <p>{productDetail.idSize}</p></div>
            <div className='flex'>
                <div className='flex px-4 '>
                  <input value={quantity} onInput={(e)=>hanldeOnchangeInput(e)} className='w-10 pl-3 rounded-2xl py-4 text-xl focus:outline-none' type="text" />
                  <div className='p-2 flex flex-col'>
                    <button className='w-max cursor-pointer' onClick={()=>setQuantity(pre=>pre+1)}><FaChevronUp size={25}/></button>
                    <button className='w-max cursor-pointer' onClick={()=>hanldeDown()}><FaChevronDown size={25} /></button>
                  </div>
                </div>
              <button onClick={AddtoCart} disabled={quantity ===0 ? true : false} className='bg-button ml-4 text-2xl px-7 py-3 rounded-3xl'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail