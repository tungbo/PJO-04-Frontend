import React from "react";
import Logo from "../../asset/logo.png";
import headerImg from "../../asset/header-img.png";
import { Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
import { AppContextAPI } from "../../Context/AppContext";
const HeaderBeffore = () => {
  const { scroll, setScroll } = React.useContext(AppContextAPI);

  React.useEffect(() => {
    const hanldeScroll = () => {
      requestAnimationFrame(() => {
        if (window.scrollY > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    };
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, [scroll, setScroll]);
  return (
    <div
      className={`relative h-24 ${
        scroll
          ? " w-full shadow-md py-0 bg-slate-50 delay-100 duration-200 ease-in-out"
          : "duration-100  ease-in-out py-3 bg-transparent"
      }`}
    >
      <img
        src={headerImg}
        className={`absolute ${
          scroll
            ? "delay-100  -translate-y-28 duration-500 ease-in-out -top-10 left-[31rem]"
            : "-top-10 translate-y-10 delay-100 duration-1000 ease-in-out left-[31rem]"
        }`}
        alt=""
      />
      <div
        className={`w-[90%] h-full mx-auto flex justify-between ${
          scroll
            ? "translate-y-4 duration-150 ease-in-out"
            : "translate-y-10 ease-in-out duration-500"
        }`}
      >
        <div>
          <img
            className={
              scroll
                ? "-translate-y-7 scale-50 ease-in-out duration-500"
                : "transition-transform scale-100 ease-in-out duration-1000"
            }
            src={Logo}
            alt=""
          />
        </div>
        <div className="w-[40%]">
          <ul className="flex items-center mt-6 justify-around">
            <li>
              <Link className={`text-xl font-medium`} to="">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" to="/OurMenu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" to="">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" to="">
                Cart
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" to="Register">
                Register
              </Link>
            </li>
            <li>
              <Link className="text-xl font-medium" to="Login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBeffore;
