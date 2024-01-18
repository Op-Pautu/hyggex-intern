import React from "react";
import HomeSvg from "./HomeSvg";
import ArrowSvg from "./ArrowSvg";

const BreadCrumbs = () => {
  return (
    <div className="mt-[72px] flex items-center">
      <HomeSvg />
      <ArrowSvg />
      <p className="text-[#696671] font-[500] text-[18px]">Flashcard</p>
      <ArrowSvg />
      <p className="text-[#696671] font-[500] text-[18px]">Mathematics</p>
      <ArrowSvg />
      <p className="font-semibold leading-normal text-center text-blue-900 text-[18px]">
        Relation and Function
      </p>
    </div>
  );
};

export default BreadCrumbs;
