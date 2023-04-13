import React from 'react'
import {bannerImg} from "../../assets/index"

const RigthBanner = () => {
  return (
    
    <div className="w-1/2 flex justify-center item-center relative">
    <img 
    className="w-[300px] h-[500px] z-10"
    src={bannerImg} 
    alt="bannerImg"
    />
    <div>
      <div className="absolute bottom-0 w-[100px] h-[400px] bg-gradient-to-r from-
      [#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
      </div>
  )
}

export default RigthBanner