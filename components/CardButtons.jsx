import React from "react";
import Rotate from "./Svg/Rotate";
import Left from "./Svg/Left";
import Right from "./Svg/Right";
import Window from "./Svg/Window";

const CardButtons = () => {
  return (
    <div className="mt-[32px]  w-full mx-auto  border-t border-red-500">
      <div className="flex items-center justify-center gap-[140px]">
        <Rotate />
        <div className="flex gap-[43px] items-center justify-center">
          <Left />
          <p className="text-[24px] font-bold tracking-normal text-[#202B37] leading-trim font-inter">
            01/10
          </p>
          <Right />
        </div>
        <Window />
      </div>
    </div>
  );
};

export default CardButtons;
