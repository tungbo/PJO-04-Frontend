import React from "react";
import BlackJamun from "../../asset/black-jamun.png";
import Banner from "../../asset/banner-img.png";
import BannerBottom from "../../asset/banner-img-bottom.png";
import DailyFresh from "../../asset/daily-fresh.png";
import hanh from "../../asset/hanh.png";
import toi from "../../asset/toi.png";
import { BsCart3 } from "react-icons/bs";
import La from "../../asset/home-leaf.png";
import OurStory from "../../asset/our-story.png";
import { motion, useInView, useAnimation } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import OurMenu from "../../Component/OurMenu/OurMenu";
const Home = () => {
  const ref = React.useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const OurStoryControl = useAnimation();
  React.useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      OurStoryControl.start("visible");
    }
    Aos.init({ duration: 2000 });
  }, [isInview, mainControls, OurStoryControl]);
  return (
    <div className="mt-36">
      <section className="relative mt-28 flex justify-around ">
        <img src={BlackJamun} className="absolute left-0 -top-10" alt="" />
        <div className="w-2/3 ml-20 mt-32">
          <h1 className="text-6xl w-[500px] font-bold tracking-wider ">
            Handmade, Width an Extra Pinch of
            <span className="text-red-600">Love</span>
          </h1>
          <p className="text-4xl w-[80%] font-medium opacity-70">
            Experience the taste of tradition with our handcrafted sweets, made
            with love and care
          </p>
          <button className="flex items-center py-6 rounded-3xl mt-8 -translate-x-3 px-14 tracking-widest text-2xl duration-200 ease-out bg-button hover:bg-red-600">
            <BsCart3 /> Order NOW
          </button>
        </div>
        <div className="relative ">
          <motion.div
            initial={{ scale: 0, rotate: 180, translateX: "50%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            animate={{ translateX: "-20%", rotate: 0, scale: 1 }}
          >
            <img
              src={Banner}
              className="w-full mr-56 h-full object-cover"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, translateX: "50%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            animate={{ translateX: "0%", translateY: "5%", scale: 1 }}
            className="w-[1000px] h-[1000px] absolute -top-36 -right-[470px] -z-10 rounded-full bg-yellow-400"
          ></motion.div>
          <motion.img
            className="absolute top-0 right-0 -z-[1]"
            initial={{ scale: 0, translateX: "50%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            animate={{ translateX: "-20%", scale: 1 }}
            src={La}
            alt=""
          />
          <motion.img
            className="absolute bottom-0 right-0 -z-[1]"
            initial={{ scale: 0, translateX: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            animate={{ translateX: "-10%", translateY: "80%", scale: 1 }}
            src={BannerBottom}
            alt=""
          />
        </div>
      </section>
      <article
        ref={ref}
        className="relative flex justify-start mt-32 items-center"
      >
        <motion.img
          className="ml-1"
          initial={{ scale: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          animate={{ scale: 1 }}
          src={DailyFresh}
          alt=""
        />
        <div data-aos="fade-right" className="ml-40 w-[400px]">
          <h1 className="text-3xl tracking-wide font-bold">
            Daily fresh and always tasty
          </h1>
          <p className="text-xl opacity-75">
            Indulge in the delightful harmony of flavors with our daily fresh
            and always tasty pizzas.
          </p>
        </div>
        <img
          className="absolute top-0 left-96 -z-[1]"
          data-aos="fade-right"
          src={hanh}
          alt=""
        />
        <motion.img
          className="absolute top-0 right-0 -z-[1]"
          transition={{ duration: 2, ease: "easeInOut" }}
          variants={{
            hidden: { scale: 0, rotate: 180, translateX: "50%" },
            visible: {
              translateX: "-140%",
              translateY: "70%",
              rotate: 0,
              scale: 1,
            },
          }}
          initial="hidden"
          animate={mainControls}
          src={toi}
          alt=""
        />
      </article>
      <OurMenu />
      <div className="relative mt-44 flex justify-around">
        <motion.div
          transition={{ duration: 2, ease: "easeInOut" }}
          variants={{
            hidden: { scale: 0, rotate: 180, translateX: "-50%" },
            visible: {
              translateX: "0%",
              rotate: 0,
              scale: 1,
            },
          }}
          initial="hidden"
          animate={OurStoryControl}
          className="w-1/2"
        >
          <img src={BlackJamun} className="absolute left-0 top-0" alt="" />
          <img src={OurStory} alt="" />
        </motion.div>
        <div className="w-1/2">
          <p className="text-3xl text-red-500">Our Story _____</p>
          <h1 className="text-5xl mt-3 font-semibold">The Pizzon Has Excellent Of Quality Foods</h1>
          <p className="mt-4 text-xl opacity-70">
            Immerse yourself in the extraordinary world of culinary delight with
            our quality food pizza, where each slice is a testament to
            excellence. Our commitment to using the finest ingredients begins
            with a meticulously crafted dough, delivering a perfect balance of
            softness and crunch. A symphony of flavors unfolds as our rich
            tomato sauce, made from sun-ripened tomatoes, harmonizes with the
            premium cheese blend, creating a luscious and indulgent base.
          </p>
          <button className="flex items-center text-white py-4 uppercase rounded-3xl mt-8 -translate-x-3 px-10 tracking-widest text-2xl duration-200 ease-out bg-button hover:bg-red-600">
            ReadMore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
