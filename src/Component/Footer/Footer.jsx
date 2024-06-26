import React from "react";
import appStore from "../../asset/apl-store.png"
import CHPlay from "../../asset/ggl-play.png"
import { Link } from "react-router-dom";
import {motion, useAnimation, useInView } from "framer-motion";
const Footer = () => {
  const ref = React.useRef(null)
  const isInview = useInView(ref, { once: false});
  const mainControls = useAnimation();
  React.useEffect(()=>{
    if(isInview){
      mainControls.start("visible")
    }
  },[isInview,mainControls])
  return (
    <div ref={ref} className="bg-[#faebd78c] py-32">
     <motion.div 
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        hidden: { scale: 0, translateY: "50%" },
        visible: {
          translateY: "0%",
          scale: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
     className="flex ">
        <div className="flex w-[75%] justify-around gap-1 0 ">
            <ul className="text-start ">
            <h1 className="uppercase text-2xl">Information</h1>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Home</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Blog</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">About Us</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Menu</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Contact Us</Link></li>
            </ul>
            <ul className="text-start">
            <h1 className="uppercase text-2xl">Top Items</h1>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Peppsi</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Pestovas Pizza</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Margherita Pizza</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Cheese Pizza</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Mexicana Pizza</Link></li>
            </ul><ul className="text-start">
            <h1 className="uppercase text-2xl">Information</h1>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Checkout</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Cart</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Product Us</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">Location</Link></li>
            <li className="mt-4"><Link className="text-xl text-black opacity-70 hover:text-red-600" to="">My Account</Link></li>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl text-red-500 mb-4">Trung Liver</h1>
            <div className="flex">
            <img src={appStore} alt="" />
            <img src={CHPlay} alt="" />
            </div>
        </div>
     </motion.div>
    </div>
  );
};

export default Footer;
