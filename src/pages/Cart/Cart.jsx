import React from "react";
import "./index.css";
import imgProduct from "../../asset/onion.jpg";
import { FaArrowLeft, FaTrashAlt, FaArrowRight } from "react-icons/fa";
import { CartController } from "../../Service/CartController";
import { GetUserInfo } from "../../redux/selector";
import { useSelector } from "react-redux";
import { AppContextAPI } from "../../Context/AppContext";
const Cart = () => {
    const [listCart,setListCart] = React.useState([])
    const {idAccount} = useSelector(GetUserInfo)
    const {hanldeIncrementCart,hanldeDecrementCart,hanldeRemoveCart} = React.useContext(AppContextAPI)
    React.useEffect(()=>{
       if(idAccount){
            CartController.getAllCart(idAccount).then(data=>setListCart(data))
       }else{
        console.log("chuaw dawng nhap")
       }
    },[])
    
   
  return (
    <div className="flex pt-28 mb-28">
      <div className="w-[75%] px-11">
        <table id="ViewCart">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove </th>
            </tr>
          </thead>
          <tbody>
           {listCart.map((cart,index)=>(
             <tr key={index}>
             <td>
               <img className="mx-auto" src={imgProduct} width={100} alt="" />
             </td>
             <td className="font-medium">{cart.namePiza}</td>
             <td>${cart.Price}</td>
             <td className="flex justify-center h-28 items-center">
               <div onClick={()=>hanldeDecrementCart(cart)}>
                 <FaArrowLeft className="cursor-pointer" />
               </div>
               <input type="text" onChange={()=>{}} value={cart.quantity} className="w-4 text-center" />
               <div onClick={()=>hanldeIncrementCart(cart)}>
                 <FaArrowRight className="cursor-pointer" />
               </div>
             </td>
             <td>
               {cart.Price * cart.quantity}
             </td>
             <td>
               <div onClick={()=>hanldeRemoveCart(cart)}>
                 <FaTrashAlt className="mx-auto cursor-pointer" />
               </div>
             </td>
           </tr>
           ))}
          </tbody>
        </table>
      </div>
      <div className="w-[35%] border border-gray-2000">
        <div className="w-[90%] py-4 mx-auto">
            <h1 className="text-2xl py-3 mb-2 border-b-2">Cart totals</h1>
            <div className="flex justify-between">
                <p className="text-lg text-gray-600">Shipping</p>
                <p className="text-lg text-gray-600">$290.00</p>
            </div>
            <div className="flex justify-between py-3 mb-2 border-b-2">
                <p className="text-lg text-gray-600">Total</p>
                <p className="text-lg text-gray-600">$290.00</p>
            </div>
            <button className="bg-button py-3 px-20 translate-x-14 rounded-3xl">Checkout</button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
