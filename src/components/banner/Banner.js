import React from "react";
import LeftBanner from "./LeftBanner";
import RigthBanner from "./RigthBanner";
const Banner = () => {
 

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner/>
     
     <RigthBanner/>
    </section>
  );
};

export default Banner;
