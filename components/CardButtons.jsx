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
        <Left />
        <Right />
        <Window />
      </div>
    </div>
  );
};

export default CardButtons;
