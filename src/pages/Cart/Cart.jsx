import React from "react";
import "./index.css";
import imgProduct from "../../asset/onion.jpg";
import { FaArrowLeft, FaTrashAlt, FaArrowRight } from "react-icons/fa";
import { CartController } from "../../Service/CartController";
import { GetUserInfo } from "../../redux/selector";
import { useSelector } from "react-redux";
import { AppContextAPI } from "../../Context/AppContext";
import { CheckoutController } from "../../Service/Checkout";
const Cart = () => {
  let total = 0;
  const [listCart, setListCart] = React.useState([]);
  const { idAccount } = useSelector(GetUserInfo);
  const { hanldeIncrementCart, hanldeDecrementCart, hanldeRemoveCart } =
    React.useContext(AppContextAPI);
  React.useEffect(() => {
    if (idAccount) {
      CartController.getAllCart(idAccount).then((data) => setListCart(data));
    } else {
      console.log("chuaw dawng nhap");
    }
  }, [idAccount]);
  console.log(listCart);
  const hanldeCheckout = (total) => {
    // console.log({ totalOrderPiza: total, orderDetail: [...listCart] });
    if (listCart.length > 0) {
      CheckoutController.Checkout({
        idAccount: idAccount,
        totalOrderPiza: total,
        orderDetail: [...listCart],
      });
      window.location.reload();
    }
  };
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
            {listCart.map((cart, index) => {
              total = total + cart.Price * cart.quantity;
              return (
                <tr key={index}>
                  <td>
                    <img
                      className="mx-auto"
                      src={`${process.env.REACT_APP_URL_BACK_IMG}/${cart.imgPiza}`}
                      width={100}
                      alt=""
                    />
                  </td>
                  <td className="font-medium">{cart.namePiza}</td>
                  <td>${cart.Price}</td>
                  <td className="flex justify-center h-28 items-center">
                    <div onClick={() => hanldeDecrementCart(cart)}>
                      <FaArrowLeft className="cursor-pointer" />
                    </div>
                    <input
                      type="text"
                      onChange={() => {}}
                      value={cart.quantity}
                      className="w-4 text-center"
                    />
                    <div onClick={() => hanldeIncrementCart(cart)}>
                      <FaArrowRight className="cursor-pointer" />
                    </div>
                  </td>
                  <td>{cart.Price * cart.quantity}</td>
                  <td>
                    <div onClick={() => hanldeRemoveCart(cart)}>
                      <FaTrashAlt className="mx-auto cursor-pointer" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-[35%] border border-gray-2000">
        <div className="w-[90%] py-4 mx-auto">
          <h1 className="text-2xl py-3 mb-2 border-b-2">Cart totals</h1>
          <div className="flex justify-between">
            <p className="text-lg text-gray-600">Shipping</p>
            <p className="text-lg text-gray-600">Free</p>
          </div>
          <div className="flex justify-between py-3 mb-2 border-b-2">
            <p className="text-lg text-gray-600">Total</p>
            <p className="text-lg text-gray-600">${total}</p>
          </div>
          <button
            onClick={() => hanldeCheckout(total)}
            className="bg-button py-3 px-20 translate-x-14 rounded-3xl"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
