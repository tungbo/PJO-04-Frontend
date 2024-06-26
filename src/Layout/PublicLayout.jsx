import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthCreateContext } from "../Context/AuthContex";
import { AppContextAPI } from "../Context/AppContext";
import Footer from "../Component/Footer/Footer";
import HeaderAffter from "../Component/Header/HeaderAffter";
import HeaderBeffore from "../Component/Header/HeaderBeffore"
const PublicLayout = () => {
    const { auth } = React.useContext(AuthCreateContext);
    const {scroll} = useContext(AppContextAPI)
    return (
      <div className="relative">
        <div className={scroll ?"sticky top-0 w-full z-[9999]":""}>
         {auth ?  <HeaderAffter /> : <HeaderBeffore/>}
        </div>
        <div className="mt-36">{<Outlet/>}</div>
        <Footer/>
      </div>
    );
}

export default PublicLayout