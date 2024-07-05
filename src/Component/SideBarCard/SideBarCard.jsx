import React from "react";
import { IoIosClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import imgProduct from "../../asset/onion.jpg";
import { AppContextAPI } from "../../Context/AppContext";
import { GetUserInfo } from "../../redux/selector";
import { useSelector } from "react-redux";
import { CartController } from "../../Service/CartController";
const SideBarCard = () => {
  const { visibleCart, setVisibleCart } = React.useContext(AppContextAPI);
  const [listCart, setListCart] = React.useState([]);
  const { idAccount } = useSelector(GetUserInfo);
  React.useEffect(() => {
    if (idAccount) {
      CartController.getAllCart(idAccount).then((data) => setListCart(data));
    } else {
      console.log("chuaw dawng nhap");
    }
  }, [idAccount]);
  console.log(listCart);
  return (
    <div>
      <div
        onClick={() => setVisibleCart(false)}
        className={`fixed bg-blur top-0 z-[99999999] h-screen ${
          visibleCart ? "w-screen" : "w-0"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 w-[400px] z-[999999999] ease-in-out duration-300 bg-white h-screen ${
          visibleCart ? "" : "translate-x-[500px]"
        }`}
      >
        <div className=" flex justify-between items-center px-4 shadow-lg ">
          <h1 className="text-xl font-medium">Shopping Cart</h1>
          <button onClick={() => setVisibleCart(false)}>
            <IoIosClose size={45} />
          </button>
        </div>
        <div>
          {listCart.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between py-4 border-b border-b-gray-200"
              >
                <div className="flex items-center">
                  <img width={100} src={imgProduct} alt="" />
                  <div>
                    <p className="text-xl font-medium">{item.namePiza}</p>
                    <div className="flex items-center">
                      <p className="px-5">{item.quantity}</p>
                      <span>${item.Price}</span>
                    </div>
                  </div>
                </div>
                <button>
                  <FaRegTrashAlt size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBarCard;
