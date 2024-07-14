import React from "react";
import { useNavigate } from "react-router-dom";
import { CartController } from "../Service/CartController";
import { CookieController } from "../Service/CookiesController";
export const AppContextAPI = React.createContext();
const AppProvider = ({ children }) => {
  const [scroll, setScroll] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [visibleCart, setVisibleCart] = React.useState(false);
  let navigate = useNavigate();
  React.useEffect(() => {
    setIsLoading(true);
    return () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
  }, [navigate]);

  const hanldeAddCart = (idCart) => {
    const isLogin = CookieController.getTokenCookies("isLogin");
    if (isLogin) {
      CartController.addCart(idCart);
      navigate("/Pizza/Cart");
      window.location.reload();
    } else {
      navigate("/Login");
    }
    setIsLoading(true);
  };
  const hanldeIncrementCart = (cart) => {
    const cartUpdate = { ...cart, quantity: cart.quantity + 1 };
    CartController.UpdateCart(cartUpdate);
    window.location.reload();
  };
  const hanldeDecrementCart = (cart) => {
    if (cart.quantity > 1) {
      const cartUpdate = { ...cart, quantity: cart.quantity - 1 };
      CartController.UpdateCart(cartUpdate);
      window.location.reload();
    }
  };
  const hanldeRemoveCart = (cart) => {
    CartController.DeleteCart(cart);
    window.location.reload();
  };
  return (
    <AppContextAPI.Provider
      value={{
        scroll,
        setScroll,
        isLoading,
        setIsLoading,
        visibleCart,
        setVisibleCart,
        hanldeAddCart,
        hanldeIncrementCart,
        hanldeDecrementCart,
        hanldeRemoveCart,
      }}
    >
      {children}
    </AppContextAPI.Provider>
  );
};

export default AppProvider;
