import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContextAPI } from "../Context/AppContext";
import Footer from "../Component/Footer/Footer";
import HeaderAffter from "../Component/Header/HeaderAffter";
import { CookieController } from "../Service/CookiesController";

const PrivateLayout = () => {
  const {scroll} = useContext(AppContextAPI)
  const checkLogin =CookieController.getTokenCookies("isLogin")
  return (
    <div className="relative">
      <div className={scroll ?"sticky top-0 w-full z-[9999]":""}>
        <HeaderAffter />
      </div>
      <div className="mt-36">{checkLogin ? <>{<Outlet />}</> : <Navigate to="/login" />}</div>
      <Footer/>
    </div>
  );
};

export default PrivateLayout;
